import dynamic from 'next/dynamic'
const Partners = dynamic(() => import('@/components/Partners'))

export default function FooterSimple(props) {
  const { isamp, ...other } = props
  const logo = '/static/img/logo-cep.svg'
  return (
    <>
      <footer className="footer" {...other}>
        {!isamp ? (
          <img src={logo} loading="lazy" alt="Logo" width="152" height="35" className="logo" />
        ) : (
          <amp-img src={logo} width="152" height="35" layout="fixed" className="logo"></amp-img>
        )}

        {/* Footer Menu */}
        <div>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms of Use</a>
            </li>
            <li>
              <a href="mailto:contact@counteverypenny.com.au">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Partners */}
        <div className="container" style={{ maxWidth: 700 }}>
          {!isamp && <Partners />}
        </div>

        {/* Copyright */}
        <p className="copyright text-14">
          <strong>
            &copy; Copyright Count Every Penny 2021. All rights reserved. Counteverypenny.com.au or the companies it
            works with do not compare all products in the market. The availability of products compared may change from
            time to time. Not all products available from our partners are compared and not all products are available
            to all customers. This is a sponsored article and is intended as an advertisement, not editorial content.
            Asymmetric Information ATF Sideprojects Unit Trust.
          </strong>
        </p>
      </footer>

      {/* Styles */}
      <style jsx>{`
        .footer {
          background-color: #fff;
          padding: 20px;
          text-align: center;
          border-top: 1px solid #eeeeee;
          margin-top: 50px;

          a {
            color: #000;
            text-decoration: none;
          }

          @media screen and (max-width: 500px) {
            text-align: left;
            padding-left: 40px;
            padding-right: 40px;
            background: #fafafa;
          }

          .logo {
            display: none;
            @media screen and (max-width: 500px) {
              display: inline-block;
            }
          }

          ul {
            display: block;
            list-style: none;
            padding-left: 0;
            @media screen and (max-width: 500px) {
              columns: 2;
              -webkit-columns: 2;
              -moz-columns: 2;
              margin-top: 30px;
              padding-bottom: 10px;
              border-bottom: 1px solid #cacaca;
            }
            li {
              line-height: 1;
              display: inline-block;
              margin: 0 10px;
              font-weight: 700;
              @media screen and (max-width: 500px) {
                margin: 0 20px 20px 0;
              }
            }
          }

          .copyright {
            font-size: 12px;
            line-height: 22px;
            max-width: 1050px;
            margin: 20px auto 0;
            color: #25282b;
          }

          &.footer-dark {
            background-color: #59370f;
            border-color: #59370f;
            color: #fff;

            @media screen and (max-width: 500px) {
              text-align: left;
              padding-left: 10px;
              padding-right: 10px;
              background: #59370f;
            }

            .logo {
              display: none !important;
            }

            ul {
              @media screen and (max-width: 767px) {
                border-bottom: none;
                text-align: center;
                display: flex;
                justify-content: center;
              }
              li {
                font-size: 16px;
                @media screen and (max-width: 767px) {
                  margin-left: 5px;
                  margin-right: 5px;
                }
                a {
                  font-weight: 700;
                  font-size: 16px;
                }
              }
            }

            .partners {
              display: none;
            }

            a {
              color: #fff;
            }

            .copyright {
              color: #fff;
              font-size: 14px;
              font-weight: 400;
              strong {
                font-weight: 400;
              }
              @media screen and (max-width: 767px) {
                text-align: center;
              }
            }
          }
        }
      `}</style>
      <style jsx global>
        {`
          .footer {
            &.footer-dark {
              .partners {
                display: none;
              }
            }
          }
        `}
      </style>
    </>
  )
}
