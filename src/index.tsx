import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { ThemeProvider } from './shared/theme/ThemeContext';
import 'shared/config/i18n/i18n';
import './app/styles/index.scss';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
