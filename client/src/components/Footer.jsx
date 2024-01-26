import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitterX, BsStackOverflow } from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                    <Link to="/" className='self-center whitespace-nowrap text-lg 
                        sm:text-xl font-semibold dark:text-white'
                    >
                        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500
                        via-purple-500 to-pink-500 rounded-lg text-white'>safe</span>
                        Space
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 
                    sm:gap-6">
                        <div>
                            <Footer.Title title='About' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                    The beginning
                                </Footer.Link>
                                <Footer.Link href="/about" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                    SafeSpace
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Follow us' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="https://github.com/alexkiriungi" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link href="https://linkedin.com/in/alex-kiriungi-719993200/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title='Legal' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" 
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link href="#" 
                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                </div>
            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright 
                href="https://alexkiriungi.github.io/portfolio" 
                target="_blank"
                rel="noopener noreferrer"
                by="AlexKiriungi" 
                year={new Date().getFullYear()} 
                />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href="https://linkedin.com/in/alex-kiriungi-719993200/"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    icon={BsLinkedin} />
                    <Footer.Icon href="https://github.com/alexkiriungi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    icon={BsGithub} />
                    <Footer.Icon href="https://www.instagram.com/xander.4k?igsh=bHJ2MW55Y2czaXlz" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    icon={BsInstagram} />
                    <Footer.Icon href="https://x.com/Xander34523629?t=k6bPcMAyItUAsvDAHdXefQ&s=03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    icon={BsTwitterX} />
                    <Footer.Icon href="https://stackoverflow.com/users/22042237/alex-kiriungi"
                    target="_blank" 
                    rel="noopener noreferrer" 
                    icon={BsStackOverflow} />
                </div>
            </div>
        </div>
    </Footer>
  );
}
