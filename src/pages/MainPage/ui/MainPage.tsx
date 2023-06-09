import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../../shared/lib/classNames/classNames';

const MainPage: FC = memo(() => {
    const { t } = useTranslation('mainPage');
    return (
        <div
            className={classNames(
                'mainClass',
                { falseClass: false, trueClass: true },
                { otherTrue: 'true' }
            )}
        >
            {t('Main page')}
        </div>
    );
});

export default MainPage;
