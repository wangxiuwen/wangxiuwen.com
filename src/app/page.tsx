'use client';

import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

export default function Home() {
    const [isLightOff, setIsLightOff] = useState(false);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
            {isLightOff && (
                <div className="fixed inset-0 bg-black/80 z-20 transition-opacity duration-300 ease-in-out"></div>
            )}
            <header className="fixed top-0 left-0 right-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
                <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-900 dark:text-white">我的作品集</h1>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={() => setIsLightOff(!isLightOff)}
                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="Toggle lights"
                        >
                            {isLightOff ? (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                我
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-900 dark:text-white">你好！我是一名后端架构师，这里展示了我的一些作品。</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 font-bold">
                                访
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                            <p className="text-gray-900 dark:text-white">请介绍一下你的主要作品。</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                                我
                            </div>
                        </div>
                        <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-4">
                            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                                <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden p-4 group">
                                    <Image
                                        src="/screenshot-search.png"
                                        alt="uunit 项目截图"
                                        width={800}
                                        height={450}
                                        className="object-contain transform -rotate-5 opacity-90 w-full h-full transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
                                        style={{ objectFit: 'contain', padding: '1rem' }}
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">uunit 爬虫项目</h3>
                                    <p className="mt-1 text-gray-600 dark:text-gray-300">嗯，这是一个站在大模型肩膀上的电影搜索桌面应用，能够智能地使用多线程抓取磁力链接，同时补充电影信息用于展示。</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 flex justify-between items-center">
                                    <div className="flex items-center space-x-2">
                                        <a href="https://github.com/wangxiuwen/uunit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors">
                                            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            GitHub
                                        </a>
                                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">爬虫</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">多线程</span>
                                        <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">桌面客户端</span>
                                    </div>
                                    <a href="https://github.com/wangxiuwen/uunit" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">查看详情 →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
