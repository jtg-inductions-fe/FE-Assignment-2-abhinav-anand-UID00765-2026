import { useNavigate } from 'react-router-dom';

import { Error } from '@components';
import { PATHS } from '@constants';

export const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <Error
            title="404"
            message="Oops! The page you are looking for does not exist."
            titleColor="primary"
            buttonText="Go Back Home"
            onButtonClick={() => void navigate(PATHS.HOME)}
        />
    );
};
