import { ConfigService } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose/dist/interfaces/mongoose-options.interface';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<MongooseModuleOptions> => {
  return {
    uri: getMongoUrl(configService),
    // options: getOptions(),
  };
};

const getMongoUrl = (configService: ConfigService): string => {
  return (
    'mongodb://' +
    configService.get('DATABASE_USER') +
    ':' +
    configService.get('DATABASE_PASSWORD') +
    '@' +
    configService.get('DATABASE_HOST') +
    ':' +
    configService.get('DATABASE_PORT') +
    '/' +
    configService.get('DATABASE_NAME') +
    '?authSource=admin&readPreference=primary'
  );
};

// todo: check options docs
const getOptions = () => ({
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
