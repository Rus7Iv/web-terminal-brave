import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --max-width: 1100px;
        --border-radius: 12px;
        --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
        'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
        'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    html,
    body {
        overflow-x: hidden;
    }
    
    body{
        min-width: 300px;
        background: linear-gradient(90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        transform: translate3d(0, 0, 0);
    }
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;
 
export default GlobalStyle;