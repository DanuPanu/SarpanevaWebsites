"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { AnimatedGroup } from '@/components/motion-primitives/animated-group'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export default function HeroSection() {
    return (
        <>
            <main className="overflow-hidden">
                <section
                    className="pb-12 md:pb-30 lg:pb-80 lg:pt-30 relative">
                    <Image
                        src="/emile-perron-xrVDYZRGdw4-unsplash.jpg"
                        alt="Taustakuva"
                        fill
                        priority
                        className="object-cover object-center -z-10"
                    />
                    <div className="relative pt-24 md:pt-36">
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-left sm:mx-auto lg:ml-0 lg:mt-0 text-white max-w-2xl">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    as="h1"
                                    className="mt-8 text-5xl md:text-7xl lg:mt-16 2xl:text-[5.25rem] text-white"
                                >
                                    Sarpaneva Websites
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-8 max-w-2xl text-balance text-md md:text-lg text-white"
                                >
                                    Modernit ja nopeat verkkosivut yrityksellesi - selkeä design, sujuva käyttökokemus ja tehokas toteutus alusta loppuun.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-start justify-start gap-2 md:flex-row"
                                >
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                                    >
                                        <Button asChild className="p-4 text-md md:text-lg">
                                            <Link href="/yhteystiedot">
                                                Ota yhteyttä
                                            </Link>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}