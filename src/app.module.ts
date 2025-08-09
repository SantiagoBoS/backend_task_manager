import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

//Conexion a la base de datos con TypeORM y PostgreSQL
//Asegúrate de tener las variables de entorno configuradas en un archivo .env
@Module({
  imports: [
    //Para que el archivo .env sea global
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST,
      /* port: parseInt(process.env.DB_PORT ?? `5432`, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, */
      autoLoadEntities: true,
      synchronize: true, //WARNING: Solo para desarrollo, no usar en producción
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TasksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
