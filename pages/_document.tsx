import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en' >
        <Head >
          <title>Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta />
          <meta name="description" content="Portfolio, Frontend developer ReactJS" />
          <meta property='og:image'
            content='https://media.proglib.io/posts/2019/11/03/c236c35c960c7016e0d785b0558026c4.png'
            data-rh="true" />
          <meta property="og:title" content="Portfolio" data-rh="true" />
          <meta property="og:description" content="Portfolio, Frontend developer ReactJS" data-rh="true" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,200&display=swap" rel="stylesheet" />
        </Head>
        <body className='text-white bg-gray-200 bg-gradient-to-r from-myBlack via-myDarkGrey to-myDarkBlue dark:bg-gradient-to-r dark:from-myLightGrey dark:to-myLightBlue dark:text-myDarkGrey'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

