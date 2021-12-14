import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" data-react-helmet="true" />
        <meta name="title" content="Zafar ul hasan madani" />
        <meta
          name="description"
          content="Zafar ul hasan madani - Listen and Download the Lectures"
        />
        <meta
          name="keywords"
          content="zafar ul hasan madani, zafarul hasan madani,zafar ul hasan, zafarul hasan, zafarulhasan, sheikh zafar ul hasan madani, shaikh zafar ul hasan madani, islamic lectures in urdu, urdu lectures, kibarul ulama, salafi, scholars, lectures, aalim, shaban, ramadan, dhul hijjah, zul hijjah, muharram, quran and sunnah, quran and sunnah, surah fatihah, surah baqarah, surah ibrahim, zafar, zafarulhasan, sheikh, jummuah, quran tafseer, bulugh al maram, kitab at tawheed, usool as thalathah, sharh as sunnah, shamail muhammadiyah, riyad us saliheen, al arbaoona nawawi, nawawi hadith, tadween as sunnah, raf al malam, isteqamat, scholar, zafar ul hasan madani, peace tv, zafar ul hasan madani in hyderabad, jummuah khutbah,Kolkata Shahri Jamiat Ahle Hadees,KSJAH,tadween as sunnah, isteqamat, manhaj, salaf, quran, hadith, ahle hadith, fiqh, shahada, pillars of islam, peace, eid al fitr, eid 2021 dubai,bulugh al maram,juz amma tafseer,kitab at tawheed,kitab tawheed,quran tafseer,ramadan,ramadan lectures,riyad us saliheen,riyadusaliheen,shamil muhmmadiyah,sharh as sunna,sharh as sunnah,surah ahzab,surah an'aam,surah araf,surah baqarah tafseer,surah hujurat,surah ibrahim,surah saba,tafseer of juz amma,tafseer surah al baqarah,tafseer surah baqarah,urdu bayan,Usool al-Thalatha,usool as salasah,usool ath thalathah,zafrul hasan"
        />
        <meta name="google-signin-scope" content="profile email" />
        <meta
          name="google-signin-client_id"
          content="49414264815-bmhluep38d16e9qcnhtjmhnc51ubic31.apps.googleusercontent.com"
        />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <title>فضيلة الشيخ ظفر الحسن مدني حفظه الله</title>
      </Head>
      <>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
          integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></Script>
        <Script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></Script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></Script>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        ></Script>
        <Script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></Script>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-188974269-1"
        ></Script>
      </>
    </div>
  );
}

export default MyApp;
