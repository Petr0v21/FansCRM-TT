import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('/api/v1');
  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port);
  console.log('Server runing on port ' + port);
}
bootstrap();
