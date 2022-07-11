import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_jxY7O9dLR',
  ClientId: '4jm4euhjs1ocuv07c99jiva5k9',
};

export default new CognitoUserPool(poolData);
