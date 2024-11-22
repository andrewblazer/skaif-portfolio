import React from 'react'
import Navlink from '../components/Navlink'

export default function Footer() {
    return (
        <footer className='flex flex-col gap-7 w-full bg-white bg-opacity-5 py-10'>
            <div className='flex flex-col gap-7 items-center'>
                <div className="text-3xl font-bold tracking-wide bg-gradient-to-tr from-[#0080FF] to-[#0022E4] inline-block text-transparent bg-clip-text">LOGO</div>

                <div className='flex justify-center items-center mt-2 gap-10'>
                    <Navlink>Home</Navlink>
                    <Navlink>Services</Navlink>
                    <Navlink>About Me</Navlink>
                    <Navlink>Portfolio</Navlink>
                    <Navlink>Contact Me</Navlink>
                </div>
                <div className='flex gap-2'>
                    <a className='bg-white bg-opacity-5 border-[#575757] border-[0.7px] rounded-full inline-flex p-3'>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.8 0.5H14.2C17.4 0.5 20 3.1 20 6.3V14.7C20 16.2383 19.3889 17.7135 18.3012 18.8012C17.2135 19.8889 15.7383 20.5 14.2 20.5H5.8C2.6 20.5 0 17.9 0 14.7V6.3C0 4.76174 0.61107 3.28649 1.69878 2.19878C2.78649 1.11107 4.26174 0.5 5.8 0.5ZM5.6 2.5C4.64522 2.5 3.72955 2.87928 3.05442 3.55442C2.37928 4.22955 2 5.14522 2 6.1V14.9C2 16.89 3.61 18.5 5.6 18.5H14.4C15.3548 18.5 16.2705 18.1207 16.9456 17.4456C17.6207 16.7705 18 15.8548 18 14.9V6.1C18 4.11 16.39 2.5 14.4 2.5H5.6ZM15.25 4C15.5815 4 15.8995 4.1317 16.1339 4.36612C16.3683 4.60054 16.5 4.91848 16.5 5.25C16.5 5.58152 16.3683 5.89946 16.1339 6.13388C15.8995 6.3683 15.5815 6.5 15.25 6.5C14.9185 6.5 14.6005 6.3683 14.3661 6.13388C14.1317 5.89946 14 5.58152 14 5.25C14 4.91848 14.1317 4.60054 14.3661 4.36612C14.6005 4.1317 14.9185 4 15.25 4ZM10 5.5C11.3261 5.5 12.5979 6.02678 13.5355 6.96447C14.4732 7.90215 15 9.17392 15 10.5C15 11.8261 14.4732 13.0979 13.5355 14.0355C12.5979 14.9732 11.3261 15.5 10 15.5C8.67392 15.5 7.40215 14.9732 6.46447 14.0355C5.52678 13.0979 5 11.8261 5 10.5C5 9.17392 5.52678 7.90215 6.46447 6.96447C7.40215 6.02678 8.67392 5.5 10 5.5ZM10 7.5C9.20435 7.5 8.44129 7.81607 7.87868 8.37868C7.31607 8.94129 7 9.70435 7 10.5C7 11.2956 7.31607 12.0587 7.87868 12.6213C8.44129 13.1839 9.20435 13.5 10 13.5C10.7956 13.5 11.5587 13.1839 12.1213 12.6213C12.6839 12.0587 13 11.2956 13 10.5C13 9.70435 12.6839 8.94129 12.1213 8.37868C11.5587 7.81607 10.7956 7.5 10 7.5Z" fill="#BABABA" />
                        </svg>

                    </a>
                    <a className='bg-white bg-opacity-5 border-[#575757] border-[0.7px] rounded-full inline-flex p-3'>
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 0.5C15.7956 0.5 16.5587 0.816071 17.1213 1.37868C17.6839 1.94129 18 2.70435 18 3.5V15.5C18 16.2956 17.6839 17.0587 17.1213 17.6213C16.5587 18.1839 15.7956 18.5 15 18.5H3C2.20435 18.5 1.44129 18.1839 0.87868 17.6213C0.316071 17.0587 0 16.2956 0 15.5V3.5C0 2.70435 0.316071 1.94129 0.87868 1.37868C1.44129 0.816071 2.20435 0.5 3 0.5H15ZM15 2.5H3C2.73478 2.5 2.48043 2.60536 2.29289 2.79289C2.10536 2.98043 2 3.23478 2 3.5V15.5C2 15.7652 2.10536 16.0196 2.29289 16.2071C2.48043 16.3946 2.73478 16.5 3 16.5H15C15.2652 16.5 15.5196 16.3946 15.7071 16.2071C15.8946 16.0196 16 15.7652 16 15.5V3.5C16 3.23478 15.8946 2.98043 15.7071 2.79289C15.5196 2.60536 15.2652 2.5 15 2.5ZM5 7.5C5.24493 7.50003 5.48134 7.58996 5.66437 7.75272C5.84741 7.91547 5.96434 8.13975 5.993 8.383L6 8.5V13.5C5.99972 13.7549 5.90212 14 5.72715 14.1854C5.55218 14.3707 5.31305 14.4822 5.05861 14.4972C4.80416 14.5121 4.55362 14.4293 4.35817 14.2657C4.16271 14.1021 4.0371 13.8701 4.007 13.617L4 13.5V8.5C4 8.23478 4.10536 7.98043 4.29289 7.79289C4.48043 7.60536 4.73478 7.5 5 7.5ZM8 6.5C8.23419 6.49996 8.46097 6.58213 8.6408 6.73216C8.82062 6.8822 8.94208 7.09059 8.984 7.321C9.18523 7.20431 9.39327 7.09979 9.607 7.008C10.274 6.723 11.273 6.566 12.175 6.849C12.648 6.999 13.123 7.279 13.475 7.756C13.79 8.181 13.96 8.698 13.994 9.279L14 9.5V13.5C13.9997 13.7549 13.9021 14 13.7272 14.1854C13.5522 14.3707 13.313 14.4822 13.0586 14.4972C12.8042 14.5121 12.5536 14.4293 12.3582 14.2657C12.1627 14.1021 12.0371 13.8701 12.007 13.617L12 13.5V9.5C12 9.17 11.92 9.016 11.868 8.945C11.7934 8.85215 11.6905 8.78615 11.575 8.757C11.227 8.647 10.726 8.705 10.393 8.847C9.893 9.061 9.435 9.397 9.123 9.708L9 9.84V13.5C8.99972 13.7549 8.90212 14 8.72715 14.1854C8.55218 14.3707 8.31305 14.4822 8.05861 14.4972C7.80416 14.5121 7.55362 14.4293 7.35817 14.2657C7.16271 14.1021 7.0371 13.8701 7.007 13.617L7 13.5V7.5C7 7.23478 7.10536 6.98043 7.29289 6.79289C7.48043 6.60536 7.73478 6.5 8 6.5ZM5 4.5C5.26522 4.5 5.51957 4.60536 5.70711 4.79289C5.89464 4.98043 6 5.23478 6 5.5C6 5.76522 5.89464 6.01957 5.70711 6.20711C5.51957 6.39464 5.26522 6.5 5 6.5C4.73478 6.5 4.48043 6.39464 4.29289 6.20711C4.10536 6.01957 4 5.76522 4 5.5C4 5.23478 4.10536 4.98043 4.29289 4.79289C4.48043 4.60536 4.73478 4.5 5 4.5Z" fill="#BABABA" />
                        </svg>
                    </a>
                </div>
            </div>

            <div></div>
        </footer>
    )
}
