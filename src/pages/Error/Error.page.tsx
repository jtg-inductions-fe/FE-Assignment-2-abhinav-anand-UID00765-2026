import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { ErrorComponent } from '@components';

import { ErrorContainer } from './Error.styles';

export const ErrorPage = () => {
    const error = useRouteError();
    let errorMessage = 'An unexpected error occurred.';

    if (isRouteErrorResponse(error)) {
        const errorData = error.data as { message?: string } | undefined;
        errorMessage = errorData?.message || error.statusText || errorMessage;
    } else if (error instanceof Error) {
        errorMessage = error.message;
    }

    return (
        <ErrorContainer>
            <ErrorComponent
                title="Something went wrong!"
                message={errorMessage}
                titleColor="error"
            />
        </ErrorContainer>
    );
};
