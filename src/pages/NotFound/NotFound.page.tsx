import { ErrorComponent } from '@components';

export const NotFoundPage = () => (
    <ErrorComponent
        title="404"
        message="Oops! The page you are looking for does not exist."
        titleColor="primary"
    />
);
