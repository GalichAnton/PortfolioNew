import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,200&display=swap" rel="stylesheet" />
        </Head>
        <body className='bg-gradient-to-r from-myBlack via-myDarkGrey to-myDarkBlue'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
