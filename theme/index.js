import theme from 'mdx-deck/themes'

export default {
  ...theme,
  font: '"Roboto Mono", Poppins, Roboto, sans-serif',
  h1: {
    textTransform: 'uppercase',
    fontWeight: 600,
  },
  h2: {
    color: '#32C3FF'
  },
  monospace: '"Dank Mono", Josefin Sans, Sans Serif',
  img: {
    maxWidth: '100%'
  },
  weights: 400,
  li: {
    paddingBottom: '20px',
    fontFamily: '"Ranga","Verdana"',
    fontSize: '0.8em'
  },
  ul: {
    // listStyle: 'none',
    paddingLeft: '20px',
    display: 'inline-block'
  },
  p: {
    fontSize: '40px'
  },
  colors: {
    text: '#FFF',
    background: '#2D354C',
    link: '#32C3FF',
    pre: '#FFD35C',
    preBackground: '#1E2434',
    code: '#fff',
    strong: '#FFD35C'
  }
}