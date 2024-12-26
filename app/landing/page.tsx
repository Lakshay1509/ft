'use client';

import React, { useState, useEffect } from 'react';
import './styles.css'; // Ensure the CSS file path is correct
import Link from 'next/link';


const WalletWhiz = () => {

    return (
        <div className="App">

            {/* Header with Logo as Button */}
            <header className="header">
            <Link href="/landing" passHref>
                <div 
                    className="brand-name"  
                    style={{ cursor: 'pointer' }} 
                    role="button" 
                    aria-label="Scroll to top"
                >
                    <img src="/logo.png" alt="WalletWhiz Logo" style={{ width: '200px', height: 'auto' }} />
                </div>
            </Link>

                <nav className="nav-bar">
                    <ul>
                        <li><a href="#markets">Markets</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#help">Help</a></li>
                    </ul>
                </nav>
            </header>

            {/* Main Hero Section */}
            <main>
                <div className="hero-section">
                    {/* Tagline & Description */}
                    <div className="content">
                        <h1 className="tagline">Simplify Your Finances.</h1>
                        <p className="description">
                            Take control of your money with WalletWhiz. Track expenses, optimize savings, and make smarter financial decisions effortlessly.
                        </p>
                    </div>

                    {/* Get Started Button */}
                    <Link href="https://ft-theta.vercel.app/" passHref>
                        <button className="centered-button">
                            <span className="text">Get Started</span>
                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="35.5" stroke="white" strokeWidth="3"></circle>
                                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="white"></path>
                            </svg>
                        </button>
                    </Link>
                </div>

                {/* Features Section */}
                <section id="features" className="features-section">
                    <h2>Why Choose WalletWhiz?</h2>
                    <div className="features-container">
                        <div className="feature">
                            <h3>Smart Budgeting</h3>
                            <p>Plan your monthly expenses and save smarter with our advanced budgeting tools.</p>
                        </div>
                        <div className="feature">
                            <h3>Real-Time Analytics</h3>
                            <p>Get instant insights into your spending habits with real-time analytics.</p>
                        </div>
                        <div className="feature">
                            <h3>Custom Alerts</h3>
                            <p>Stay informed with custom alerts for transactions, savings, and goals.</p>
                        </div>
                        <div className="feature">
                            <h3>Smart Recommendations</h3>
                            <p>Receive personalized tips for better financial decisions based on your habits.</p>
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="testimonials-section">
                    <h2>What Our Users Say</h2>
                    <div className="testimonials-container">
                        <div className="testimonial">
                            <p>"WalletWhiz helped me save over $500 in just three months!"</p>
                            <footer>- Sarah Connor</footer>
                        </div>
                        <div className="testimonial">
                            <p>"A must-have app for anyone serious about financial planning!"</p>
                            <footer>- Michael Smith</footer>
                        </div>
                        <div className="testimonial">
                            <p>"Simple, intuitive, and incredibly useful for managing expenses."</p>
                            <footer>- Emily Davis</footer>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-container">
                        <div className="faq">
                            <h4>Is WalletWhiz free to use?</h4>
                            <p>Yes! WalletWhiz offers a free plan with essential features. Premium plans are available for advanced tools.</p>
                        </div>
                        <div className="faq">
                            <h4>Can I sync WalletWhiz with my bank account?</h4>
                            <p>Absolutely! WalletWhiz supports seamless integration with most major banks.</p>
                        </div>
                        <div className="faq">
                            <h4>How secure is my data on WalletWhiz?</h4>
                            <p>Your security is our priority. We use end-to-end encryption to protect your financial information.</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 WalletWhiz | All Rights Reserved</p>
            </footer>
        </div>
    );
};

export default WalletWhiz;