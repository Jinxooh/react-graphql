import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Righteous|Ubuntu');
  @import '~include-media/dist/include-media';

  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #ced4da;
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