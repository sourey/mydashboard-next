'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Fallback image for broken images
const FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"%3E%3Crect fill="%231a1a1a" width="400" height="600"/%3E%3Ctext fill="%23FFE500" font-family="system-ui" font-size="48" font-weight="bold" text-anchor="middle" x="200" y="280"%3E🎬%3C/text%3E%3Ctext fill="%23ffffff" font-family="system-ui" font-size="16" font-weight="bold" text-anchor="middle" x="200" y="340"%3ENo Image%3C/text%3E%3C/svg%3E';

// ============================================
// 🎬📺📚 YOUR RECOMMENDATIONS
// Edit these arrays with your personal favorites!
// ============================================

const recommendations = {
  movies: [
    // === YOUR CLASSICS ===
    { 
      title: 'The Green Mile', 
      year: '1999', 
      genre: 'Drama', 
      rating: '9.3', 
      emoji: '⚡',
      description: 'A tale of death row miracles and the power of compassion.',
      director: 'Frank Darabont',
      image: 'https://image.tmdb.org/t/p/w500/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg'
    },
    { 
      title: "Ferris Bueller's Day Off", 
      year: '1986', 
      genre: 'Comedy', 
      rating: '8.5', 
      emoji: '🚗',
      description: 'Life moves pretty fast. If you don\'t stop and look around, you could miss it.',
      director: 'John Hughes',
      image: 'https://image.tmdb.org/t/p/w500/9LTQNCvoLsKXP0LtaKAaYVtRaQL.jpg'
    },
    { 
      title: 'The Breakfast Club', 
      year: '1985', 
      genre: 'Drama', 
      rating: '8.8', 
      emoji: '🎒',
      description: 'Five strangers with nothing in common, except each other.',
      director: 'John Hughes',
      image: 'https://image.tmdb.org/t/p/w500/vSZD4hnvfGHgx0RNXfg7V9j27MQ.jpg'
    },
    { 
      title: 'Star Wars: A New Hope', 
      year: '1977', 
      genre: 'Sci-Fi', 
      rating: '9.2', 
      emoji: '⭐',
      description: 'A long time ago in a galaxy far, far away...',
      director: 'George Lucas',
      image: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg'
    },

    // === ACTION ===
    { 
      title: 'The Dark Knight', 
      year: '2008', 
      genre: 'Action', 
      rating: '9.5', 
      emoji: '🦇',
      description: 'The definitive superhero film with an iconic villain.',
      director: 'Christopher Nolan',
      image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    { 
      title: 'Mad Max: Fury Road', 
      year: '2015', 
      genre: 'Action', 
      rating: '9.3', 
      emoji: '🔥',
      description: 'A non-stop adrenaline rush through a post-apocalyptic wasteland.',
      director: 'George Miller',
      image: 'https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg'
    },
    { 
      title: 'Die Hard', 
      year: '1988', 
      genre: 'Action', 
      rating: '9.0', 
      emoji: '💥',
      description: 'Yippee-ki-yay! The greatest action movie ever made.',
      director: 'John McTiernan',
      image: 'https://image.tmdb.org/t/p/w500/yFihWxQcmqcaBR31QM6Y8gT6aYV.jpg'
    },
    { 
      title: 'Terminator 2: Judgment Day', 
      year: '1991', 
      genre: 'Action', 
      rating: '9.4', 
      emoji: '🤖',
      description: 'I\'ll be back. The sequel that surpassed the original.',
      director: 'James Cameron',
      image: 'https://image.tmdb.org/t/p/w500/5M0j0B18abtBI5gi2RhfjjurTqb.jpg'
    },
    { 
      title: 'John Wick', 
      year: '2014', 
      genre: 'Action', 
      rating: '8.8', 
      emoji: '🔫',
      description: 'A retired hitman unleashes chaos for his dog. Legendary gun-fu.',
      director: 'Chad Stahelski',
      image: 'https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg'
    },
    { 
      title: 'The Raid', 
      year: '2011', 
      genre: 'Action', 
      rating: '9.1', 
      emoji: '👊',
      description: 'Indonesian martial arts mayhem. Pure, brutal, beautiful action.',
      director: 'Gareth Evans',
      image: 'https://image.tmdb.org/t/p/w500/uOl3eQ9gGKIVjtq0zhNKufvqpPz.jpg'
    },

    // === SCI-FI ===
    { 
      title: 'Blade Runner', 
      year: '1982', 
      genre: 'Sci-Fi', 
      rating: '9.2', 
      emoji: '🌧️',
      description: 'A neo-noir masterpiece. All those moments will be lost in time.',
      director: 'Ridley Scott',
      image: 'https://image.tmdb.org/t/p/w500/63N9uy8nd9j7Eog2axPQ8lbr3Wj.jpg'
    },
    { 
      title: 'Blade Runner 2049', 
      year: '2017', 
      genre: 'Sci-Fi', 
      rating: '9.0', 
      emoji: '🔮',
      description: 'A rare sequel that honors the original. Visually stunning.',
      director: 'Denis Villeneuve',
      image: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg'
    },
    { 
      title: 'Interstellar', 
      year: '2014', 
      genre: 'Sci-Fi', 
      rating: '9.6', 
      emoji: '🚀',
      description: 'An epic journey through space and time. Love transcends dimensions.',
      director: 'Christopher Nolan',
      image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    { 
      title: '2001: A Space Odyssey', 
      year: '1968', 
      genre: 'Sci-Fi', 
      rating: '9.5', 
      emoji: '🛸',
      description: 'The film that defined sci-fi cinema. Open the pod bay doors, HAL.',
      director: 'Stanley Kubrick',
      image: 'https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Pk8gWrOLdTtZ3j.jpg'
    },
    { 
      title: 'Arrival', 
      year: '2016', 
      genre: 'Sci-Fi', 
      rating: '9.1', 
      emoji: '👽',
      description: 'First contact done right. A profound meditation on language and time.',
      director: 'Denis Villeneuve',
      image: 'https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg'
    },
    { 
      title: 'Dune', 
      year: '2021', 
      genre: 'Sci-Fi', 
      rating: '9.0', 
      emoji: '🏜️',
      description: 'The spice must flow. A visionary adaptation of the sci-fi epic.',
      director: 'Denis Villeneuve',
      image: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg'
    },
    { 
      title: 'Ex Machina', 
      year: '2014', 
      genre: 'Sci-Fi', 
      rating: '8.9', 
      emoji: '🤖',
      description: 'A tense, cerebral thriller about artificial intelligence.',
      director: 'Alex Garland',
      image: 'https://image.tmdb.org/t/p/w500/btbRB7BrD887j5NrvjxceRDmaot.jpg'
    },

    // === MIND-BENDER ===
    { 
      title: 'Inception', 
      year: '2010', 
      genre: 'Mind-Bender', 
      rating: '9.5', 
      emoji: '🌀',
      description: 'A dream within a dream within a dream. Reality is never what it seems.',
      director: 'Christopher Nolan',
      image: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg'
    },
    { 
      title: 'Shutter Island', 
      year: '2010', 
      genre: 'Mind-Bender', 
      rating: '8.8', 
      emoji: '🏝️',
      description: 'Which would be worse - to live as a monster or die as a good man?',
      director: 'Martin Scorsese',
      image: 'https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg'
    },
    { 
      title: 'Fight Club', 
      year: '1999', 
      genre: 'Mind-Bender', 
      rating: '9.4', 
      emoji: '🧼',
      description: 'The first rule of Fight Club is: you do not talk about Fight Club.',
      director: 'David Fincher',
      image: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
    },
    { 
      title: 'The Matrix', 
      year: '1999', 
      genre: 'Mind-Bender', 
      rating: '9.3', 
      emoji: '💊',
      description: 'What is real? How do you define real?',
      director: 'The Wachowskis',
      image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
    },
    { 
      title: 'Memento', 
      year: '2000', 
      genre: 'Mind-Bender', 
      rating: '9.1', 
      emoji: '📸',
      description: 'Some memories are best forgotten. But what if you can\'t remember to forget?',
      director: 'Christopher Nolan',
      image: 'https://image.tmdb.org/t/p/w500/yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg'
    },
    { 
      title: 'Donnie Darko', 
      year: '2001', 
      genre: 'Mind-Bender', 
      rating: '8.5', 
      emoji: '🐰',
      description: '28 days, 6 hours, 42 minutes, 12 seconds. That is when the world will end.',
      director: 'Richard Kelly',
      image: 'https://image.tmdb.org/t/p/w500/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg'
    },
    { 
      title: 'The Prestige', 
      year: '2006', 
      genre: 'Mind-Bender', 
      rating: '9.2', 
      emoji: '🎩',
      description: 'Are you watching closely? Every great magic trick has three parts.',
      director: 'Christopher Nolan',
      image: 'https://image.tmdb.org/t/p/w500/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg'
    },
    { 
      title: 'Mulholland Drive', 
      year: '2001', 
      genre: 'Mind-Bender', 
      rating: '8.9', 
      emoji: '🌃',
      description: 'David Lynch\'s surreal masterpiece. Hollywood\'s dark underbelly.',
      director: 'David Lynch',
      image: 'https://image.tmdb.org/t/p/w500/tVxGt7uffLVhIIcwMBhYGPIjnGY.jpg'
    },
    { 
      title: 'Predestination', 
      year: '2014', 
      genre: 'Mind-Bender', 
      rating: '8.7', 
      emoji: '⏳',
      description: 'The ultimate time paradox. Will melt your brain.',
      director: 'Spierig Brothers',
      image: 'https://image.tmdb.org/t/p/w500/qXDWYIHfKLhKTVXwJxjglCW4xyg.jpg'
    },
    { 
      title: 'Primer', 
      year: '2004', 
      genre: 'Mind-Bender', 
      rating: '8.5', 
      emoji: '📊',
      description: 'The most complex time travel film ever made. Made for $7,000.',
      director: 'Shane Carruth',
      image: 'https://image.tmdb.org/t/p/w500/vMXTfcEVkxvsKoKVo1p4pYFjmbX.jpg'
    },

    // === QUENTIN TARANTINO ===
    { 
      title: 'Pulp Fiction', 
      year: '1994', 
      genre: 'Tarantino', 
      rating: '9.6', 
      emoji: '💼',
      description: 'Non-linear storytelling at its finest. And you will know my name is the Lord.',
      director: 'Quentin Tarantino',
      image: 'https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
    },
    { 
      title: 'Kill Bill: Vol. 1', 
      year: '2003', 
      genre: 'Tarantino', 
      rating: '9.0', 
      emoji: '⚔️',
      description: 'A blood-soaked revenge epic. The Bride\'s journey begins.',
      director: 'Quentin Tarantino',
      image: 'https://image.tmdb.org/t/p/w500/v7TKvwCcCBEeRJpJKK8iEJMgFz0.jpg'
    },
    { 
      title: 'Inglourious Basterds', 
      year: '2009', 
      genre: 'Tarantino', 
      rating: '9.2', 
      emoji: '🔥',
      description: 'Nazi-hunting cinema. That\'s a bingo!',
      director: 'Quentin Tarantino',
      image: 'https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg'
    },
    { 
      title: 'Django Unchained', 
      year: '2012', 
      genre: 'Tarantino', 
      rating: '9.1', 
      emoji: '🤠',
      description: 'A freed slave becomes a bounty hunter. D-J-A-N-G-O. The D is silent.',
      director: 'Quentin Tarantino',
      image: 'https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg'
    },
    { 
      title: 'Reservoir Dogs', 
      year: '1992', 
      genre: 'Tarantino', 
      rating: '9.0', 
      emoji: '💎',
      description: 'Tarantino\'s explosive debut. Who\'s Mr. Pink?',
      director: 'Quentin Tarantino',
      image: 'https://image.tmdb.org/t/p/w500/xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg'
    },

    // === MARTIN SCORSESE ===
    { 
      title: 'Goodfellas', 
      year: '1990', 
      genre: 'Scorsese', 
      rating: '9.7', 
      emoji: '🔪',
      description: 'As far back as I can remember, I always wanted to be a gangster.',
      director: 'Martin Scorsese',
      image: 'https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg'
    },
    { 
      title: 'Taxi Driver', 
      year: '1976', 
      genre: 'Scorsese', 
      rating: '9.4', 
      emoji: '🚕',
      description: 'You talkin\' to me? De Niro\'s haunting portrayal of urban alienation.',
      director: 'Martin Scorsese',
      image: 'https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg'
    },
    { 
      title: 'The Departed', 
      year: '2006', 
      genre: 'Scorsese', 
      rating: '9.3', 
      emoji: '🐀',
      description: 'Cops and robbers, moles and moles. Oscar-winning crime epic.',
      director: 'Martin Scorsese',
      image: 'https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg'
    },
    { 
      title: 'Raging Bull', 
      year: '1980', 
      genre: 'Scorsese', 
      rating: '9.2', 
      emoji: '🥊',
      description: 'The brutal, beautiful story of boxer Jake LaMotta.',
      director: 'Martin Scorsese',
      image: 'https://image.tmdb.org/t/p/w500/yYlknfjT5cynzFtnGaIPZ6Lv8MQ.jpg'
    },
    { 
      title: 'The Wolf of Wall Street', 
      year: '2013', 
      genre: 'Scorsese', 
      rating: '9.0', 
      emoji: '💰',
      description: 'The true story of Jordan Belfort\'s excess. I\'m not leaving!',
      director: 'Martin Scorsese',
      image: 'https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9MXKhRDtzYd4MR.jpg'
    },

    // === DAVID FINCHER ===
    { 
      title: 'Se7en', 
      year: '1995', 
      genre: 'Fincher', 
      rating: '9.5', 
      emoji: '📦',
      description: 'Seven deadly sins, seven victims. What\'s in the box?!',
      director: 'David Fincher',
      image: 'https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg'
    },
    { 
      title: 'Gone Girl', 
      year: '2014', 
      genre: 'Fincher', 
      rating: '9.0', 
      emoji: '💔',
      description: 'Marriage is a battle of wits. A twisted thriller about toxic love.',
      director: 'David Fincher',
      image: 'https://image.tmdb.org/t/p/w500/lv5xShBIDPe7m4ufdkj1RZbT6Vl.jpg'
    },
    { 
      title: 'The Social Network', 
      year: '2010', 
      genre: 'Fincher', 
      rating: '9.1', 
      emoji: '👤',
      description: 'The Facebook origin story. You don\'t get to 500 million friends without making enemies.',
      director: 'David Fincher',
      image: 'https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg'
    },
    { 
      title: 'Zodiac', 
      year: '2007', 
      genre: 'Fincher', 
      rating: '8.9', 
      emoji: '🔍',
      description: 'The obsessive hunt for a serial killer. True crime masterpiece.',
      director: 'David Fincher',
      image: 'https://image.tmdb.org/t/p/w500/aIfHEi5e4RVZiVlxZKSWYEyLt8W.jpg'
    },

    // === DAVID LEAN ===
    { 
      title: 'Lawrence of Arabia', 
      year: '1962', 
      genre: 'Epic', 
      rating: '9.8', 
      emoji: '🏜️',
      description: 'The greatest epic ever made. Nothing is written.',
      director: 'David Lean',
      image: 'https://image.tmdb.org/t/p/w500/AiAm0EXEuBMHPgxNSCGVCzWzlWz.jpg'
    },
    { 
      title: 'The Bridge on the River Kwai', 
      year: '1957', 
      genre: 'Epic', 
      rating: '9.3', 
      emoji: '🌉',
      description: 'Madness! Madness! A war epic about duty and destruction.',
      director: 'David Lean',
      image: 'https://image.tmdb.org/t/p/w500/bVgCdLbHbljLBIDnVXSjN6pRz9p.jpg'
    },
    { 
      title: 'Doctor Zhivago', 
      year: '1965', 
      genre: 'Epic', 
      rating: '8.9', 
      emoji: '❄️',
      description: 'A sweeping romance set against the Russian Revolution.',
      director: 'David Lean',
      image: 'https://image.tmdb.org/t/p/w500/75EhGgmRy4h7VH36uxSFSiO8u4b.jpg'
    },

    // === STEPHEN CHOW ===
    { 
      title: 'Kung Fu Hustle', 
      year: '2004', 
      genre: 'Stephen Chow', 
      rating: '9.2', 
      emoji: '🥋',
      description: 'Hilarious martial arts madness. The most inventive action-comedy ever.',
      director: 'Stephen Chow',
      image: 'https://image.tmdb.org/t/p/w500/uIlWj5iLpErLqlxkGBaLsLzRNTi.jpg'
    },
    { 
      title: 'Shaolin Soccer', 
      year: '2001', 
      genre: 'Stephen Chow', 
      rating: '8.8', 
      emoji: '⚽',
      description: 'What if monks played soccer? Pure comedy gold.',
      director: 'Stephen Chow',
      image: 'https://image.tmdb.org/t/p/w500/h2kA7LGtvMYTMPRkiSLxSsv0K2n.jpg'
    },
    { 
      title: 'God of Cookery', 
      year: '1996', 
      genre: 'Stephen Chow', 
      rating: '8.5', 
      emoji: '👨‍🍳',
      description: 'A disgraced chef\'s path to redemption. Hong Kong comedy classic.',
      director: 'Stephen Chow',
      image: 'https://image.tmdb.org/t/p/w500/hQRqF2HTMF4LIcLyPBUH5n5RUbf.jpg'
    },

    // === SATYAJIT RAY ===
    { 
      title: 'Pather Panchali', 
      year: '1955', 
      genre: 'Satyajit Ray', 
      rating: '9.5', 
      emoji: '🌾',
      description: 'The first of the Apu Trilogy. One of cinema\'s greatest achievements.',
      director: 'Satyajit Ray',
      image: 'https://image.tmdb.org/t/p/w500/qJzVfgmmKx2xBFGGSJDW4Rl3VHM.jpg'
    },
    { 
      title: 'Charulata', 
      year: '1964', 
      genre: 'Satyajit Ray', 
      rating: '9.2', 
      emoji: '📖',
      description: 'Ray considered this his finest work. A lonely wife\'s awakening.',
      director: 'Satyajit Ray',
      image: 'https://image.tmdb.org/t/p/w500/7B0mRvPVJ8G8N8WYQrMh2wNKwG3.jpg'
    },
    { 
      title: 'The Apu Trilogy', 
      year: '1955-1959', 
      genre: 'Satyajit Ray', 
      rating: '9.8', 
      emoji: '🎬',
      description: 'Three films that changed world cinema. Essential viewing.',
      director: 'Satyajit Ray',
      image: 'https://image.tmdb.org/t/p/w500/qvQTqQ3BPQK1wd8hpvxqlnfmXYe.jpg'
    },

    // === KOREAN CINEMA ===
    { 
      title: 'Oldboy', 
      year: '2003', 
      genre: 'Korean', 
      rating: '9.6', 
      emoji: '🔨',
      description: 'A man imprisoned for 15 years seeks revenge. A masterpiece of Korean cinema.',
      director: 'Park Chan-wook',
      image: 'https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg'
    },
    { 
      title: 'Parasite', 
      year: '2019', 
      genre: 'Korean', 
      rating: '9.5', 
      emoji: '🏠',
      description: 'A brilliant social commentary disguised as a thriller. Oscar winner.',
      director: 'Bong Joon-ho',
      image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    },
    { 
      title: 'The Handmaiden', 
      year: '2016', 
      genre: 'Korean', 
      rating: '9.2', 
      emoji: '🦋',
      description: 'A twisting tale of deception, desire, and liberation.',
      director: 'Park Chan-wook',
      image: 'https://image.tmdb.org/t/p/w500/dLlH4aNHdnmf62umnInL8xPlPzw.jpg'
    },
    { 
      title: 'Train to Busan', 
      year: '2016', 
      genre: 'Korean', 
      rating: '8.9', 
      emoji: '🚂',
      description: 'The best zombie movie of the decade. Heart-pounding and emotional.',
      director: 'Yeon Sang-ho',
      image: 'https://image.tmdb.org/t/p/w500/fyBO2KkEw3EKVE6xPUPGvqLtdOe.jpg'
    },

    // === HONG KONG CINEMA ===
    { 
      title: 'Infernal Affairs', 
      year: '2002', 
      genre: 'Hong Kong', 
      rating: '9.3', 
      emoji: '👮',
      description: 'The film that inspired The Departed. A cat-and-mouse thriller.',
      director: 'Andrew Lau',
      image: 'https://image.tmdb.org/t/p/w500/dwS5pYuMVrU7Bq1oWyR2NfZQcmP.jpg'
    },
    { 
      title: 'In the Mood for Love', 
      year: '2000', 
      genre: 'Hong Kong', 
      rating: '9.4', 
      emoji: '💔',
      description: 'A hypnotic romance about two people who should never have met.',
      director: 'Wong Kar-wai',
      image: 'https://image.tmdb.org/t/p/w500/shT7dR1BdwvwVwl9KfWuhEc4PRA.jpg'
    },
    { 
      title: 'Hard Boiled', 
      year: '1992', 
      genre: 'Hong Kong', 
      rating: '8.7', 
      emoji: '🔫',
      description: 'John Woo\'s action masterpiece. The hospital shootout is legendary.',
      director: 'John Woo',
      image: 'https://image.tmdb.org/t/p/w500/aZ6WpGFEJoYJMGbELumgPG5OHL8.jpg'
    },
  ],
  series: [
    // === TV SHOWS ===
    { 
      title: 'Game of Thrones', 
      year: '2011-2019', 
      genre: 'Fantasy', 
      rating: '9.5', 
      emoji: '⚔️',
      description: 'When you play the game of thrones, you win or you die.',
      seasons: '8 seasons',
      image: 'https://image.tmdb.org/t/p/w500/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg'
    },
    { 
      title: 'Dark', 
      year: '2017-2020', 
      genre: 'Sci-Fi', 
      rating: '9.5', 
      emoji: '⏰',
      description: 'A German masterpiece about time travel and family secrets.',
      seasons: '3 seasons',
      image: 'https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg'
    },
    { 
      title: 'Breaking Bad', 
      year: '2008-2013', 
      genre: 'Drama', 
      rating: '10', 
      emoji: '🧪',
      description: 'The transformation of a chemistry teacher into a drug lord.',
      seasons: '5 seasons',
      image: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg'
    },
    { 
      title: 'Boardwalk Empire', 
      year: '2010-2014', 
      genre: 'Crime', 
      rating: '9.0', 
      emoji: '🎰',
      description: 'Prohibition-era Atlantic City and the rise of organized crime.',
      seasons: '5 seasons',
      image: 'https://image.tmdb.org/t/p/w500/5C7YxqPVrJ0VeJKHjNvlxMJ5igm.jpg'
    },
    { 
      title: 'RoboCop: The Series', 
      year: '1994', 
      genre: 'Sci-Fi', 
      rating: '7.5', 
      emoji: '🤖',
      description: 'Part man, part machine, all cop. The future of law enforcement.',
      seasons: '1 season',
      image: 'https://image.tmdb.org/t/p/w500/aw4FOsWr2FY373nKSxbpNi3fOBz.jpg'
    },
    // === ANIME ===
    { 
      title: 'Naruto', 
      year: '2002-2017', 
      genre: 'Anime', 
      rating: '9.5', 
      emoji: '🍥',
      description: 'The story of a ninja who never gives up on his dream. Believe it!',
      seasons: '720+ episodes',
      image: 'https://image.tmdb.org/t/p/w500/vauCEnR7CiyBDzRCeElKkCaXIYu.jpg'
    },
    { 
      title: 'One Piece', 
      year: '1999-', 
      genre: 'Anime', 
      rating: '9.7', 
      emoji: '🏴‍☠️',
      description: 'The greatest pirate adventure ever told. King of anime.',
      seasons: '1100+ episodes',
      image: 'https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg'
    },
    { 
      title: 'Fullmetal Alchemist: Brotherhood', 
      year: '2009-2010', 
      genre: 'Anime', 
      rating: '9.8', 
      emoji: '⚗️',
      description: 'A tale of sacrifice, brotherhood, and the cost of forbidden knowledge.',
      seasons: '64 episodes',
      image: 'https://image.tmdb.org/t/p/w500/1E1tUGOWn1PqhTQpAbLfUXu48Ey.jpg'
    },
    { 
      title: 'Capeta', 
      year: '2005-2006', 
      genre: 'Anime', 
      rating: '8.5', 
      emoji: '🏎️',
      description: 'A young boy\'s journey from karting to the pinnacle of motorsport.',
      seasons: '52 episodes',
      image: 'https://image.tmdb.org/t/p/w500/ckocQ1vVUK0c7hJwEn7Hj8bpz2R.jpg'
    },
    { 
      title: 'Transformers: Armada', 
      year: '2002-2003', 
      genre: 'Anime', 
      rating: '8.0', 
      emoji: '🤖',
      description: 'Autobots and Decepticons battle for the power of the Mini-Cons.',
      seasons: '52 episodes',
      image: 'https://image.tmdb.org/t/p/w500/z3wYJPTKBvA0qAQYL8kVPNQtmEF.jpg'
    },
    { 
      title: 'Jujutsu Kaisen', 
      year: '2020-', 
      genre: 'Anime', 
      rating: '9.4', 
      emoji: '👹',
      description: 'Curses, sorcery, and jaw-dropping animation. Modern anime at its peak.',
      seasons: '2 seasons',
      image: 'https://image.tmdb.org/t/p/w500/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg'
    },
    { 
      title: 'Attack on Titan', 
      year: '2013-2023', 
      genre: 'Anime', 
      rating: '9.9', 
      emoji: '🔥',
      description: 'Humanity fights for survival against giant humanoid Titans. A masterpiece.',
      seasons: '4 seasons',
      image: 'https://image.tmdb.org/t/p/w500/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg'
    },
    { 
      title: 'Demon Slayer', 
      year: '2019-', 
      genre: 'Anime', 
      rating: '9.3', 
      emoji: '🗡️',
      description: 'Breathtaking animation and an emotional story of family and revenge.',
      seasons: '4 seasons',
      image: 'https://image.tmdb.org/t/p/w500/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg'
    },
  ],
  books: [
    { 
      title: 'Atomic Habits', 
      author: 'James Clear', 
      genre: 'Self-Help', 
      emoji: '⚛️',
      description: 'Small changes lead to remarkable results. The ultimate habit-building guide.',
      year: '2018',
      image: 'https://covers.openlibrary.org/b/id/10958382-L.jpg'
    },
    { 
      title: 'Deep Work', 
      author: 'Cal Newport', 
      genre: 'Productivity', 
      emoji: '🎯',
      description: 'Rules for focused success in a distracted world.',
      year: '2016',
      image: 'https://covers.openlibrary.org/b/id/8479576-L.jpg'
    },
    { 
      title: 'The Pragmatic Programmer', 
      author: 'Hunt & Thomas', 
      genre: 'Tech', 
      emoji: '💾',
      description: 'A must-read for every software developer. Timeless wisdom.',
      year: '1999',
      image: 'https://covers.openlibrary.org/b/id/10063923-L.jpg'
    },
    { 
      title: 'Sapiens', 
      author: 'Yuval Noah Harari', 
      genre: 'History', 
      emoji: '🧬',
      description: 'A brief history of humankind that changes perspectives.',
      year: '2011',
      image: 'https://covers.openlibrary.org/b/id/8406786-L.jpg'
    },
    { 
      title: 'The Alchemist', 
      author: 'Paulo Coelho', 
      genre: 'Fiction', 
      emoji: '✨',
      description: 'A magical story about following your dreams.',
      year: '1988',
      image: 'https://covers.openlibrary.org/b/id/8769940-L.jpg'
    },
    { 
      title: 'Thinking, Fast and Slow', 
      author: 'Daniel Kahneman', 
      genre: 'Psychology', 
      emoji: '🧠',
      description: 'Understanding the two systems that drive our thinking.',
      year: '2011',
      image: 'https://covers.openlibrary.org/b/id/7327284-L.jpg'
    },
  ],
};

const tabConfig = [
  { id: 'movies', label: 'Movies', emoji: '🎬', color: 'bg-neo-primary', borderColor: 'border-neo-primary' },
  { id: 'series', label: 'TV & Anime', emoji: '📺', color: 'bg-neo-purple', borderColor: 'border-neo-purple' },
  { id: 'books', label: 'Books', emoji: '📚', color: 'bg-neo-secondary', borderColor: 'border-neo-secondary' },
];

// Image component with fallback
function ImageWithFallback({ src, alt, ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={hasError ? FALLBACK_IMAGE : imgSrc}
      alt={alt}
      onError={() => {
        setHasError(true);
        setImgSrc(FALLBACK_IMAGE);
      }}
      unoptimized={hasError}
    />
  );
}

export default function Recommendations() {
  const [activeTab, setActiveTab] = useState('movies');
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Reset animation when tab changes
  useEffect(() => {
    setIsVisible(false);
    setFilter('all');
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const currentTab = tabConfig.find(t => t.id === activeTab);
  
  // Get unique genres for filtering
  const genres = ['all', ...new Set(recommendations[activeTab].map(item => item.genre))];
  
  // Filter items
  const filteredItems = filter === 'all' 
    ? recommendations[activeTab] 
    : recommendations[activeTab].filter(item => item.genre === filter);

  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="neo-tag bg-neo-lime mb-4 inline-block">⭐ Curated List</span>
          <h2 className="neo-title text-4xl md:text-5xl lg:text-6xl uppercase mb-4">
            My <span className="text-neo-primary">Recommendations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of movies, series, anime, and books that have shaped my thinking.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {tabConfig.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 font-black text-lg uppercase tracking-wider border-4 border-neo-dark transition-all duration-200 ${
                activeTab === tab.id
                  ? `${tab.color} text-white shadow-none translate-x-1 translate-y-1`
                  : 'bg-white shadow-neo hover:shadow-neo-hover hover:translate-x-[2px] hover:translate-y-[2px]'
              }`}
            >
              <span className="mr-2 text-2xl">{tab.emoji}</span>
              {tab.label}
              <span className="ml-2 text-sm opacity-70">({recommendations[tab.id].length})</span>
            </button>
          ))}
        </div>

        {/* Genre Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setFilter(genre)}
              className={`px-4 py-2 text-sm font-bold uppercase border-2 border-neo-dark transition-all ${
                filter === genre
                  ? 'bg-neo-dark text-white'
                  : 'bg-white hover:bg-neo-bg'
              }`}
            >
              {genre === 'all' ? '🌟 All' : genre}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className={`neo-box group hover:-translate-y-2 hover:shadow-neo-xl transition-all duration-300 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${Math.min(idx * 30, 300)}ms` }}
            >
              {/* Thumbnail Image with Fallback */}
              <div className="relative h-64 overflow-hidden border-b-4 border-neo-dark bg-neo-dark">
                <ImageWithFallback
                  src={item.image || FALLBACK_IMAGE}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neo-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Rating badge */}
                {item.rating && (
                  <div className="absolute top-2 right-2 neo-tag bg-neo-accent font-black">
                    ★ {item.rating}
                  </div>
                )}
                
                {/* Genre badge */}
                <div className={`absolute top-2 left-2 neo-tag ${currentTab.color} text-white text-xs`}>
                  {item.genre}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Header */}
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-3xl">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-black uppercase leading-tight group-hover:text-neo-primary transition-colors truncate">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono truncate">
                      {item.author || item.director || item.year}
                      {item.seasons && ` • ${item.seasons}`}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="neo-box p-12 text-center">
            <span className="text-6xl block mb-4">🔍</span>
            <p className="text-xl font-bold">No items found for this filter</p>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {tabConfig.map((tab) => (
            <div 
              key={tab.id}
              className={`neo-box p-4 text-center ${activeTab === tab.id ? tab.color + ' text-white' : 'bg-white'} transition-colors`}
            >
              <span className="text-3xl block mb-2">{tab.emoji}</span>
              <span className="text-3xl font-black block">{recommendations[tab.id].length}</span>
              <span className="text-xs uppercase tracking-wider opacity-70">{tab.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
