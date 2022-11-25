<template>
    <div class="xl:container m-auto px-6 md:px-12">
        <div aria-hidden="true"
            class="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20">
        </div>
        <div class="relative lg:flex lg:items-center lg:gap-12">
            <div class="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                <h1 class="text-gray-900 font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl dark:text-white">
                    Gestiona tus tareas de forma eficiente :)
                </h1>
                <p class="mt-8 text-gray-600 dark:text-gray-300">Odio incidunt nam itaque sed eius modi error totam sit
                    illum. Voluptas doloribus asperiores quaerat aperiam. Quidem harum omnis beatae ipsum soluta!</p>
                <div>
                    <form action="" class="w-full mt-12">
                        <div
                            class="relative flex items-center px-2 p-1 rounded-full bg-white dark:bg-gray-900 border dark:border-gray-700 border-primary/10 shadow-md md:p-2 lg:pr-3">
                            <div class="pl-6 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 m-auto fill-blue-900/60 dark:fill-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                </svg>
                            </div>
                            <input autocomplete="email" placeholder="Your mail address"
                                class="w-full p-4 rounded-full placeholder-gray-600 dark:placeholder-white bg-transparent"
                                type="email">
                            <div class="md:pr-1.5 lg:pr-0">
                                <button type="button" title="Start buying"
                                    class="relative h-12 w-20 sm:w-auto ml-auto sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary dark:before:bg-primaryLight before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                    <span
                                        class="relative hidden w-max text-white dark:text-gray-900 font-semibold md:block">
                                        Get Started
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="relative h-6 w-6 mx-auto text-white dark:text-gray-900 md:hidden"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
                    <img src="../assets/airbnb.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                    <img src="../assets/ge.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                    <img src="../assets/coty.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                    <img src="../assets/microsoft.svg" class="h-8 sm:h-10 w-auto lg:h-12" alt="" />
                </div>
            </div>
            <div class="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
                <img src="../assets/hero-image.svg" alt="project illustration" height="" width="">
            </div>
        </div>
    </div>

    <section>
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                <div class="mx-auto max-w-lg text-center lg:mx-0 lg:text-left">
                    <h2 class="text-3xl font-bold sm:text-4xl">Find your career path</h2>

                    <p class="mt-4 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                        aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                        Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                        Obcaecati, autem.
                    </p>

                    <a class="mt-8 inline-flex items-center rounded border border-indigo-600 bg-indigo-600 px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        href="/get-started">
                        <span class="text-sm font-medium"> Get Started </span>

                        <svg class="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>

                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    <a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant">
                        <span class="inline-block rounded-lg bg-gray-50 p-3">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                </path>
                            </svg>
                        </span>

                        <h2 class="mt-2 font-bold">Accountant</h2>

                        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant">
                        <span class="inline-block rounded-lg bg-gray-50 p-3">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                </path>
                            </svg>
                        </span>

                        <h2 class="mt-2 font-bold">Accountant</h2>

                        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant">
                        <span class="inline-block rounded-lg bg-gray-50 p-3">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                </path>
                            </svg>
                        </span>

                        <h2 class="mt-2 font-bold">Accountant</h2>

                        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant">
                        <span class="inline-block rounded-lg bg-gray-50 p-3">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                </path>
                            </svg>
                        </span>

                        <h2 class="mt-2 font-bold">Accountant</h2>

                        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant">
                        <span class="inline-block rounded-lg bg-gray-50 p-3">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                </path>
                            </svg>
                        </span>

                        <h2 class="mt-2 font-bold">Accountant</h2>

                        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>

                    <a class="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                        href="/accountant">
                        <span class="inline-block rounded-lg bg-gray-50 p-3">
                            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z">
                                </path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222">
                                </path>
                            </svg>
                        </span>

                        <h2 class="mt-2 font-bold">Accountant</h2>

                        <p class="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                            Lorem ipsum dolor sit amet consectetur.
                        </p>
                    </a>
                </div>
            </div>
        </div>
    </section>



    <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Trusted by eCommerce Businesses
                </h2>

                <p class="mt-4 text-gray-500 sm:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores
                    laborum labore provident impedit esse recusandae facere libero harum
                    sequi.
                </p>
            </div>

            <div class="mt-8 sm:mt-12">
                <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt class="order-last text-lg font-medium text-gray-500">
                            Total Sales
                        </dt>

                        <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                            $4.8m
                        </dd>
                    </div>

                    <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt class="order-last text-lg font-medium text-gray-500">
                            Official Addons
                        </dt>

                        <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                    </div>

                    <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                        <dt class="order-last text-lg font-medium text-gray-500">
                            Total Addons
                        </dt>

                        <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>

    <section class="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div class="container mx-auto p-4 sm:p-10">
            <div class="mb-16 space-y-4 text-center">
                <h1 class="text-4xl font-semibold leading-tight">Pricing</h1>
                <p class="px-4 sm:px-8 lg:px-24">Sunt suscipit eaque qui iure unde labore numquam iusto alias explicabo,
                    pariatur ipsam, cupiditate aliquid modi?</p>
                <div>
                    <button
                        class="px-4 py-1 font-semibold border rounded-l-lg dark:bg-violet-400 dark:border-violet-400 dark:text-gray-900">Monthly</button>
                    <button class="px-4 py-1 border rounded-r-lg dark:border-violet-400">Annually</button>
                </div>
            </div>
            <div
                class="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
                <div class="relative z-0 flex flex-col items-center p-8 border rounded-md">
                    <span
                        class="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-400 dark:text-gray-900">Personal</span>
                    <p class="my-6 text-4xl font-bold dark:text-violet-400">FREE</p>
                    <ul class="flex-1 space-y-2">
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                    </ul>
                    <button
                        class="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-violet-400">Subscribe</button>
                </div>
                <div
                    class="relative flex flex-col items-center p-8 border-2 rounded-md dark:border-violet-400 dark:bg-gray-800">
                    <span
                        class="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-400 dark:text-gray-900">Professional</span>
                    <p class="flex items-center justify-center my-6 space-x-2 font-bold">
                        <span class="text-lg line-through dark:text-gray-300">&nbsp;32€&nbsp;</span>
                        <span class="pb-2 text-4xl">19€</span>
                        <span class="text-lg">/mo</span>
                    </p>
                    <ul class="flex-1 space-y-2">
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Consectetur</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Adipisicing</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Aliquam</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur facilis</span>
                        </li>
                    </ul>
                    <button
                        class="px-8 py-3 mt-12 text-lg font-semibold uppercase rounded dark:bg-violet-400 dark:text-gray-900">Subscribe</button>
                </div>
                <div class="relative z-0 flex flex-col items-center p-8 border rounded-md dark:bg-gray-800">
                    <span
                        class="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-400 dark:text-gray-900">Enterprise</span>
                    <p class="flex items-center justify-center my-6 space-x-2 font-bold">
                        <span class="text-lg line-through dark:text-gray-300">&nbsp;49€&nbsp;</span>
                        <span class="pb-2 text-4xl">37€</span>
                        <span class="text-lg">/mo</span>
                    </p>
                    <ul class="flex-1 space-y-2">
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                        <li class="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" class="w-6 h-6 dark:text-violet-400">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                </path>
                            </svg>
                            <span>Lumet consectetur adipisicing</span>
                        </li>
                    </ul>
                    <button
                        class="px-8 py-3 mt-12 text-lg font-semibold uppercase border rounded dark:border-violet-400">Subscribe</button>
                </div>
            </div>
        </div>
    </section>

    <footer aria-label="Site Footer" class="bg-white">
        <div class="max-w-screen-xl px-4 pt-16 pb-8 mx-auto sm:px-6 lg:px-8 lg:pt-24">
            <div class="text-center">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl">
                    Customise Your Product
                </h2>

                <p class="max-w-sm mx-auto mt-4 text-gray-500">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maiores
                    ipsum eos temporibus ea nihil.
                </p>

                <a href="#"
                    class="inline-block px-12 py-3 mt-8 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
                    Get Started
                </a>
            </div>

            <div class="pt-8 mt-16 border-t border-gray-100 sm:flex sm:items-center sm:justify-between lg:mt-24">
                <nav aria-label="Footer Navigation - Support">
                    <ul class="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75">
                                Terms & Conditions
                            </a>
                        </li>

                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75">
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75">
                                Cookies
                            </a>
                        </li>
                    </ul>
                </nav>

                <ul class="flex justify-center gap-6 mt-8 sm:mt-0 lg:justify-end">
                    <li>
                        <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                            <span class="sr-only">Facebook</span>

                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                            <span class="sr-only">Instagram</span>

                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                            <span class="sr-only">Twitter</span>

                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                            <span class="sr-only">GitHub</span>

                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="/" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75">
                            <span class="sr-only">Dribbble</span>

                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fill-rule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                    clip-rule="evenodd" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>