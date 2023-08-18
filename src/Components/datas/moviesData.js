let moviesData=[
    {
        id: 1,
        title: "The Shawshank Redemption",
        year: 1994,
        genre: "Drama",
        plot: "Two prisoners become friends and find a way to escape from prison.",
        poster: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJQMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAABQQGAgMHAf/EADAQAAEDAwMCBAQGAwAAAAAAAAECAwQABRESITEGQRMiUWEHFHGhMkJScoGRFjPw/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAIDBAH/xAAfEQADAAEEAwEAAAAAAAAAAAAAAQIRAxIxUQQTcSH/2gAMAwEAAhEDEQA/AOU2qx3GbblS4kJuQ1rWkE5KiUJ1KAx3x25Papqelb0t/wABFsilwOLawHOVIdS0r83ZSgD7HNROn5Mt5KLRb23VOylOBaELQgOgtkJBJHbK+Two4xVmkwusypYKJSH3G8qKprP+1SklSsZ2B08euD2pXcy8NjKafCFn+LSpEeIuBbVLkPAEtrHkAKw2dwrssgH03zS1Fhui4vzCbYwWvBbeKgvhDmoJV+LjKCPY4zyKski3dRQHXDIC4LQdTKLj81nGrWFKKlJG6lKSnBO/lxvxS9hd/kxXH2lyHYzbbrSVIlt+VRC9t9yjQpQ0+5xjiueyOchsrorl7t8m13J2HOYbYkNnC2kKyE/c/X6EV5Xt6uj13lplSnXnXy2A4t0glSt88Abb7A8cdqKcUafDpvxutLW3qKcuK3H7FVa+vnbgxeFRW5i2m0OBSC3hJVtnUTzkZAx6CkHwwiB7qZuSoEiMnKE6ikKWrygEjfG5O3pVrvvTT8rxLkXyUoUhzwiMHkAfxwahWnT1d89YKzqQpc19GsmKtqxMx5RccW9GbExK0hQUUk43x+oH/sUlsVtt8WyT2ng+0t4r8NAO2Q2ef6P91N6Rtyrl1JHbf8VJxplLCiPIkZB+mwBHG4PbeV1FcXXICYMZa2oSfESG+BpBxn6981nnx0sy2WryspYRxOijiit5kL78NJ1tjRJ6ZjqmpaZDDscNlOp0jXkHP5R3x+vPYU/6q6jDq1xosF/QlskeEnVwrOVZ7bfauadPTRb7xGlkDDRJ3/aRTlPXFyVDbiKbjJQQEuuJRhSx774zULm/YqngpLjY01+l8+GawxNlzJc5CG3YRUMtnUCcDBG5OCO1aL8h6E0j5zDaktFWDtscng8Hjb2qrRuqYcGISmKl2T4yHkle4BSDpGO48x2P85xSC4dQ3C4TTIeeVjBAQDtg+vrXNtU88CpJIVLIK1EcEnFFY0VoFAc701MG0hCiLySofhHyit/vRRQBqbiW9UdC3LpodIypv5dR0n0z3rCdGgsIBh3D5lWrBT4CkYHrvRRQBCooooA//9k="
        },
        {
        id: 2,
        title: "The Godfather",
        year: 1972,
        genre: "Crime, Drama",
        plot: "The story of the Corleone family, who are involved in organized crime and navigate the dangerous world of gangsters and crime bosses.",
        poster: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI4AZAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xAA+EAABAwMDAQUGAQoFBQAAAAABAgMEAAURBhIhMRMiQVFhBzJxgZGhIxQVM0JSYrHB0fBTkrLh8RckJXSi/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJREAAgIBAwQBBQAAAAAAAAAAAAECEQMSITEEE0FRMhQiI8Hw/9oADAMBAAIRAxEAPwDDzSUpoxQG8aLQXfZUlBioIMR8bHHe6573U+AP2q6wyswmMtNoV2Sfw0rylPHTOOR64qmaH7H/AKVJCxE2mNI3BZyg8qzv/nUzfL63YNJsSmEMuvuNNsxGWfcWtSeNv7o6/AVUyYr2oYlktLImIZS820gGLCJWEccAHAAHxxUUu6kxrzM/N7DbM5tKkqeQAFZbCe+QTuHTOOlROkNMTUxHmr5NW8y452hbSvJ3Z5O7r/Wr7BstsiMpQxHTsBKglRJAJOT19TVPc1OolzxqPyPmm52eba17JrJQPBY7yVfBQ4qONfR2otPQJsNxlqMgJyVFlJ2JVzk9OhrAtQQjAusmPtSnY4e4n9X0q3FlU9ivJj0q0RxOaSiirioKKKKAKKKKA9UZpKKA1HSWotQRdBSI0GxqejMtuBErslFJBJ3HHRWMn+dNNU6gvEhqxvXeEqC40wosJ2FAcPdG/B6cD71dPZ06697L/wBLLCkNvoSpptJUkZVjZxz8885qA9rrJcsGm7itMt0pTsWt5KUHCkpV3wBwo48vOqqtstjKqdEvpe9uzmEkgg4yCR71WeNOkO5Sg9PMViEDWlxtzSERWYSUJG1PcUT/AKutWbUcrUjlktd4t0l5KJTIW+1GHuq8D0zj+FYZdPKM+aTN/dxzi6Vs0tS5DZLroOE+OKzTXq4V2U8G+xDjDbri1bRvBSkEAnqBnjA67smk005rWatv/upaUBQ3GSR2a0Z5BSRk/GnOp7b+SvXO4tnalETKihzBKwNoBHiCCB8qY128lXZGS1426oydVJSmkr0zzQooooAooooBaKKKA3T2ZKcV7NHUNRJi1fjhJbdSkrPPuEqG3y+OTzUre7U/e/ZsIIiSA/8AkbbjfbupUQtICuTu56H61AezeQYPsxmPohLfWpx0JbStSy6SMZ2p5SkeOPLNWL2axJY0yy9cnt7boxHZKyA0ynupHzxn4YFUt77Fun7bZlGnmramxypqUn8qbbV+k2kA48OM1b9OahtaLHbIMeWXZgSGw2EFRzxwQBwM+NUm8W02Zd0tqP0jcgpbAPddZOdqh5050mmNFilC7haozzquXHVuKeA6bNqcDHz8fpny4lJNtm7HkrSkvBpgU4pr8AGOvJ3t4HdV4/L18aoftMlLiNx4zJOJSVdorceQCDj5k/arhElNW6JsmS0ucZDpV9ucnHlkmqX7R2RIsVnuy1lBkvPJjsqTgrZG3DnwJH0UKz9LBvJfgt6uVYmvJnhpK7xYr0t0NR2lOOEEhKfIda7m0XIHH5vlZ547JXh8vSvWtHkUxjRXZ2K+zw8w62fJaCK5EYoKEoooocFqyWGy238uaGpJqobS0haWm07lqB5Gce6D9fhVbrQr3Y0OaXt10YUA+w2jtQ2M90j3s+lU5cijSbqy7Fj1W64NDZs8YWWHI0rJZjOto/BcZUexkeaXBk4J/a5OfOqRerjF1Bd27rbre4JkNlRuUWRgI3J8QM95XCvDwHjxTDTqCxFtl0tjrynGZPYyGkEZScZ3jwyRnrkdaeXGDdrNdrhdLmGnm5JWuQWUBvKccKx4E5+p61lVRbV7mvRxfBXtYaji3xccxmHEuMApDyiBlP7IA8M8/wDNdLJqONCYwu3RVLKfeUnvKPn0qpdDUnCRInNtRI8JknOC/sVnr1Jzjj4eFa3iho0+DNDPNSbXJcIN3g3R1NwvTKI1khL5bQnJku9QhKfHA+QyM1Fa6uFw1H2GpJSERoDziosCOFZKUN8k/VQyfM8cCpGNoKbMhMKuF/gRorYV2aCVqKQTk4RgEk/2eKjdX6fRpuPbEx7ubgxKLjqQGS2hJG1JIBJ5P8hXMehbRZHJKc3cirsqSMpWMA9FDqk+Bp0xd7lDy21Lc2+Su8PvTR0IKst5A8q8rO7A54GKtavkrtp7E/H1UokJuNthy0A56FtX1Scfao26zIkxzfFhGKP2e13j+AqPpK4oRXB1zk+WFFFFSIC1pOibkly2qiXNaEs7AlAWfeHTFZ9HQhbEgqGVpQCjn94Z+xq+QbZBXDYeCWu3SkblLG9J+WcVk6vS41I2dHdtofsTbDpy4OBp3s1FSVLRyfhx8/vVf1trZ6+hcSPkRFY3FQwV4OfkKg9SRuwmpcQQWHkbmTnqkEpz8MpOPTFRFdxdNFNTbtnM3UydxSpE3o20N37U0G2vbg28pW7bwcBJP8q+gLVoy1wWUtpjoAA+tYz7H8DXMRauiGnT/wDJr6CTKT51LKk5blMJNLYWNaoEdAS1GaSB5JArLfb/AAsM2WY2kBtCnWTjwzgj+BrUG57DjjrbbqVLZVtcSD7hIBAPrgg/OqB7blJf0kwoclqag/VKhXYaU9jjbZi1uabcnMh4At7u9k4GKst1g2ox2XOxQhAQvctnAPGMH161UN+Kd3OYp99aA22y2nCdjQwklPGceuM1KcHJppl2HNDHBxlG7GBpKU0lWmUKKKKAcQ31R3g4nrVqh6rcQkbko4/dFU6jJqE8anyThNxHd0nvXOe9MkKKnHVZ5PgBgD6Cugsl2PS2TT8I6v6UxScHNa3pedNlW3Tr70lxS5U91DpKvfTtcIB9OBx6VDLN40qEUpN2UzQMk2vUanHQULbZWkpIwQeBg1qDOp0n9eqy9oBa7xJnt3ltqO8l6QtwxiSgBYyMbuevX06VA3yHKsuqFWFUxLrgW0gPdmUg7wkjKQSeN32qmf5JXFlkKitzR1anQP1uT5eNVb2i3cS7RLhbwS2to8HOFAJ3D4hRUPkadxbba126S9pm9LuUtQCS4UdmqKkpUSoZHd3EBO7GUgmqo/pm4SLpbrU0+kKuIWqOH0ls9kkcLUnkpCtqsDrwM9aY4NO2xKSPWt9MSUl2/wBuiMN2JxtgtONrQkHLSMkJzn3s+HXNU51wurKyME46fCtNk6H1LF0q5bVFEooWstNMv5SApTJyN2MY7NX+b1rNZ0SRb5TsWW2W32lbVoJB2ny4rTCalw7KmmjgaSlpKmRCiiigFpaSigFrZNJWubHsemQ9CkpVHmuPPJ7FWUIUlzB6eo6edY3W+algXG4XueiBfZtuEZiPtbZPcUXFrTkjPhis+fwv71+ycPY5kXq32NbDdwmIgPuR5IaVKYXgEuApJHGR8/Cs5kaZvEnWbEuKZl4ZLseS7cFMlAWFEHIB6AYIA8hxxirDdfZwmfcW5UrUsyQR2iXnnmtyx2Y4CTmrXfbi3Cg3CWqcYuwRlJkFBXhXQZHkTjNVRlGHx3bJNOXJlns7cgWq4zJM6BcJV3hIUWIzYCUpx3Vbuc5BJByMAZPPh2uGpVXS72mZqC0MyXpCAuOolTfZoLq0pGB76RgEZ8c9c4q1WPTse0SpdxVcZElF0t763XX4+xaeUlStvXndnHpXjU+mmLxPttwamqbeisxWw2WuCguHB69eTx6VLuw12xodFGVqm7lVwEWa/EajNkstMvLwkl5AJJJyokE9fgMDiq/ej/5ed/7Ln+o1oC9CREuyEt3RwplNuhRU0BtKHEk456ZGKpusYLdvvr7bT/bBz8YnGMFRJxVuPJjk6iRlGSW5B0UUVcQCiiigPVFFFAFbe/rrSrq5k9q5OB+S0wFMLZUCns1lWM4xnvHx8BWIUhqueNT5Op0be/r3TIeDabkpaHlPKU4I6wG944z5/wB9KaSda6beR3pgcbLkVexbKs9xQzkY6jrWNUVX9PH2S7jNimazschCwLpvUWJbe5bSxytQKR06YGM+nh0rkrWFj2pIuA4ajAjYrOULJUOnrWRUU+mhVWd7rNNd1DalXp6e5ey+HY62WmuxUlDKSUnHqSR1/wBqzVxanCVOKKlE5Kick14pasx41Dg5KbkJRRRVhAKKKKAWvbaFOK2oGTjNeKKActxHFL2qG0efWuht6sEhwceaTim3ajs0o7JHHjjk/GvO8Z/Ro+9AO/zcrHv8+W2g2/aQC74Z4bJpqHADns0feuwnvDoEf5aA6KtxSvBc489hP8K9m1neE9sORz3DxXBM55PQI5692kdmOPAB1KFAHI4xQHc2zAyXhj0bVSOW5SWitK93HCdhBNNO1H+Ej6q/rR2o/wANP1V/WgOiob6EFamyEjnPhTevW4/2a80AUUUUB//Z"
        },
        {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        genre: "Action, Adventure, Crime",
        plot: "Batman and Lieutenant James Gordon try to stop the Joker from wreaking havoc on Gotham City.",
        poster: "https://www.imdb.com/title/tt0468479/posters?ref_=tt_p_2_100_2"
        },
        {
        id: 4,
        title: "12 Angry Men",
        year: 1957,
        genre: "Drama",
        plot: "A jury of 12 men must decide the fate of a young man accused of murder. Eleven of the jurors believe he is guilty, but one man holds out for a not guilty verdict.",
        poster: "https://www.imdb.com/title/tt0050844/posters?ref_=tt_p_2_100_2"
        },
        {
        id: 5,
        title: "Schindler's List",
        year: 1993,
        genre: "Biography, Drama, History",
        plot: "The true story of Oskar Schindler, a German businessman who saves the lives of thousands of Jews during the Holocaust.",
        poster: "https://www.imdb.com/title/tt0108158/posters?ref_=tt_p_2_100_2"
        },
        
    {
        id: 6,
        title: "Star Wars: The Last Jedi",
        year: 2017,
        genre: ["Action", "Adventure", "Fantasy"],
        plot: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        poster: 'https://contentserver.com.au/assets/599223_p11597936_p_v8_ac.jpg'
    },
    {
        id: 7,
        title: "Black Swan",
        year: 2010,
        genre: ["Drama", "Thriller"],
        plot: "A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.",
        poster: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1690056449/?ref_=ext_shr_lnk'
    },
    {
        id: 8,
        title: "Fight Club",
        year: 1999,
        genre: ["Drama"],
        plot: "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e'
    },
    {
        id: 9,
        title: "The Godfather: Part II",
        year: 1974,
        genre: ["Crime", "Drama"],
        plot: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        poster:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRZ6ToTQtumClvfIsMO46QiwvAm47_ghVBSZsjrJxjjPt38gyeg'
    }
]

export default moviesData;