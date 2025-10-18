import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-300 text-base-content">
      <aside>
        <p className="font-bold text-lg">Kokoro sushi</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </aside>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.instagram.com/kokorosushi_73/" target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M7.5 2C4.46 2 2 4.46 2 7.5v9C2 19.54 4.46 22 7.5 22h9c3.04 0 5.5-2.46 5.5-5.5v-9C22 4.46 19.54 2 16.5 2h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm5.5-1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
            </svg>
          </a>

          <a href="mailto:contact@kokoroSushi.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 12.713l11.985-6.713v13.286H0V6z" />
              <path d="M12 11.287L0 4h24z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  )
}

export default Footer