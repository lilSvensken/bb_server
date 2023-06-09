import { ValidatorInterface } from '../../../../utils/validators/interfaces/validator.interface';
import { checkValidatorsAll, Validators } from '../../../../utils/validators/api-validators';
import { UserRoleType } from '../../../../types/user-role.type';
import { UserFieldsLength } from '../../../../utils/validators/consts/user-fields-length';
import { emailReg, nicknameReg, phoneReg } from '../../../../utils/consts/regulars';
import { UserGenderType } from '../../../../types/user-gender.type';
import { ErrorInterface } from '../../../../utils/errors/error.interface';
import { UserRegistrationRequest } from '../interfaces/user-registration-request.interface';
import { UserRequestEnum } from '../../../../enums/users/user-request.enum';
import { StepsResultRegistration } from '../interfaces/steps-result-registration.interface';

export const step1CheckValidForm = (callback: (err: ErrorInterface, statusCode: number, nowStepsResults: StepsResultRegistration) => void,
                                    user: UserRegistrationRequest, stepsResults: StepsResultRegistration) => {
  let error: ErrorInterface = {
    type: '',
    field: '',
    message: '',
    status: 0,
  };

  const validations: ValidatorInterface[] = [
    {
      key: UserRequestEnum.Role,
      value: user.role,
      validators: [Validators.required, Validators.matchEnum(UserRoleType)]
    },
    {
      key: UserRequestEnum.Nickname,
      value: user.nickname,
      validators: [Validators.required, Validators.minLength(UserFieldsLength.nickname.min),
        Validators.maxLength(UserFieldsLength.nickname.max), Validators.regular(nicknameReg)]
    },
    {
      key: UserRequestEnum.Email,
      value: user.email,
      validators: [Validators.required, Validators.minLength(UserFieldsLength.email.min),
        Validators.maxLength(UserFieldsLength.email.max), Validators.regular(emailReg)]
    },
    {
      key: UserRequestEnum.Password,
      value: user.password,
      validators: [Validators.required, Validators.minLength(UserFieldsLength.password.min),
        Validators.maxLength(UserFieldsLength.password.max)]
    },
    {
      key: UserRequestEnum.LastsName,
      value: user.lastsName,
      validators: [Validators.minLength(UserFieldsLength.lastsName.min),
        Validators.maxLength(UserFieldsLength.lastsName.max)]
    },
    {
      key: UserRequestEnum.FirsName,
      value: user.firsName,
      validators: [Validators.minLength(UserFieldsLength.firsName.min),
        Validators.maxLength(UserFieldsLength.firsName.max)]
    },
    {
      key: UserRequestEnum.ServiceIds,
      value: user.serviceIds,
      validators: [Validators.maxLength(UserFieldsLength.serviceIds.max)]
    },
    {
      key: UserRequestEnum.CityId,
      value: user.cityId,
      validators: [Validators.maxLength(UserFieldsLength.CityId.max)]
    },
    {
      key: UserRequestEnum.Phone,
      value: user.phone,
      validators: [Validators.regular(phoneReg)]
    },
    {
      key: UserRequestEnum.Gender,
      value: user.gender,
      validators: [Validators.matchEnum(UserGenderType)]
    },
    {
      key: UserRequestEnum.Birthday,
      value: user.phone,
      validators: [Validators.maxLength(UserFieldsLength.birthday.max)]
    },
    {
      key: UserRequestEnum.Avatar,
      value: user.phone,
      validators: [Validators.maxLength(UserFieldsLength.avatar.max)]
    },
    {
      key: UserRequestEnum.InfoYourself,
      value: user.phone,
      validators: [Validators.maxLength(UserFieldsLength.infoYourself.max)]
    },
  ];

  const isValid = checkValidatorsAll(validations, error);
  if (isValid) {
    callback(null, 200, stepsResults);
  } else {
    callback(error, error.status, null);
  }
}
