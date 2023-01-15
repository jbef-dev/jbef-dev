import { ButtonProps } from './Button';
import { DefaultIcon } from './DefaultIcon';
import { LoadingSpinner } from './LoadingSpinner';
import { defaultValues } from './Button';

export const ButtonIcon = (props: ButtonProps) => {
  const {
    icon = defaultValues['icon'],
    isLoading = defaultValues['isLoading'],
  } = props;

  switch (icon) {
    case true:
      return isLoading ? (
        <div className='flex items-center justify-center transition-all group-hover:translate-x-1 group-active:translate-x-1'>
          <LoadingSpinner />
        </div>
      ) : (
        <div className='flex items-center justify-center transition-all duration-100 group-hover:translate-x-1 group-active:translate-x-1'>
          <DefaultIcon />
        </div>
      );
    case false:
      return null;
    default:
      return (
        <div>
          <div className='flex items-center justify-center transition-all group-hover:translate-x-1 group-active:translate-x-1'>
            {isLoading ? <LoadingSpinner /> : icon}
          </div>
        </div>
      );
  }
};
