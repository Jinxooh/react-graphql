import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Righteous|Ubuntu');
  @import url('https://fonts.googleapis.com/css?family=Monoton');
  @import '~include-media/dist/include-media';

  html {
    height: 100%;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #ced4da;
    height: 100%;
    margin: 0;
  }
  a {
    text-decoration: none;
  }

  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;