import Header from './Header';

function HeaderHOC({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default HeaderHOC;
