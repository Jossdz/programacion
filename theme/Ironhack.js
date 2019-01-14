// @flow
// Original: https://github.com/sdras/night-owl-vscode-theme
// Converted automatically using ./tools/themeFromVsCode

/*:: import type { PrismTheme } from '../src/types' */

var theme /*: PrismTheme */ = {
  plain: {
    color: "#fff",
    backgroundColor: "#2D354C"
  },
  styles: [
    {
      types: ["changed"],
      style: {
        color: "#0D8B9F",
        fontStyle: "italic"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "#F27471",
        fontStyle: "italic"
      }
    },
    {
      types: [],
      style: {
        color: "#77C0BC",
        fontStyle: "italic"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#596996",
        fontStyle: "italic"
      }
    },
    {
      types: ["string", "url"],
      style: {
        color: "#77C0BC"
      }
    },
    {
      types: ["variable"],
      style: {
        color: "rgb(214, 222, 235)"
      }
    },
    {
      types: ["number"],
      style: {
        color: "#FDD35B"
      }
    },
    {
      types: ["builtin", "char", "constant", "function"],
      style: {
        color: "#77C0BC"
      }
    },
    {
      // This was manually added after the auto-generation
      // so that punctuations are not italicised
      types: ["punctuation"],
      style: {
        color: "#fff",
      }
    },
    {
      types: ["selector", "doctype"],
      style: {
        color: "#B064EA",
        fontStyle: "italic"
      }
    },
    {
      types: ["class-name"],
      style: {
        color: "#F49102"
      }
    },
    {
      types: ["tag", "keyword"],
      style: {
        color: "#2DC5FA"
      }
    },
    {
      types: ["operator"],
      style: {
        color: "#B064EA"
      }
    },
    {
      types: ["boolean"],
      style: {
        color: "#F27471"
      }
    },
    {
      types: ["property"],
      style: {
        color: "#0D8B9F"
      }
    },
    {
      types: ["namespace"],
      style: {
        color: "rgb(178, 204, 214)"
      }
    }
  ]
};

module.exports = theme;
