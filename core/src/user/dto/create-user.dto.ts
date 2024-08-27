import {
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @IsPhoneNumber()
  phone: string;
}
