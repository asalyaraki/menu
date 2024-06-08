const _li = document.querySelectorAll('#list>li')
        const menu = document.querySelectorAll('#menu>div')


        _li.forEach((val) => {
            val.addEventListener('click', function () {
                let txt = val.innerHTML
                if (txt == 'All') {
                    menu.forEach((item) => {
                        
                            item.style.display = 'flex'
                        
                    })
                }
                else if (txt == 'Breakfast') {
                    menu.forEach((item) => {
                        if ((item.getAttribute('data-category')) != 'breakfast') {
                            item.style.display = 'none'
                        }else{
                            item.style.display = 'flex'
                        }
                            
                        
                    })

                }
                else if (txt == 'Lunch') {
                    menu.forEach((item) => {
                        if ((item.getAttribute('data-category')) != 'lunch') {
                            item.style.display = 'none'
                        }else{
                            item.style.display = 'flex'
                        }
                    })

                }
                else if (txt == 'Shakes') {
                    menu.forEach((item) => {
                        if ((item.getAttribute('data-category')) != 'shake') {
                            item.style.display = 'none'
                        }else{
                            item.style.display = 'flex'
                        }
                    })

                }
                else if (txt == 'Dinner') {
                    menu.forEach((item) => {
                        if ((item.getAttribute('data-category')) != 'dinner') {
                            item.style.display = 'none'
                        }else{
                            item.style.display = 'flex'
                        }
                    })

                }
            })
        })