import cap_img from './cap_img.jpg'
import cb_img from './cb_img.png'
import lat_img from './lat_img.jpg'
import menu_icon from './menu_icon.png'
import logo_img from './logo.png'
import profile_icon from './profile_icon.png'
import search_icon from './search_icon.png'
import support_img from './support_img.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import about_img from './about_img.png'
import exchange_icon from './exchange_icon.png'
import cross_icon from './cross_icon.png'
import dropdown_icon from './dropdown_icon.png'

export const assets = {
    menu_icon,
    logo_img,
    profile_icon,
    search_icon,
    support_img,
    cart_icon,
    bin_icon,
    about_img,
    exchange_icon,
    cross_icon,
    dropdown_icon
}

export const products = [
    {
        _id: "aaaaa",
        name: "Cappuccino",
        description: "A double shot of espresso with 6 oz of streamed milk",
        price: 3.50,
        image: [cap_img],
        category: "Drinks",
        date: 4567890,
        bestseller: false
    },
    {
        _id: "aaaab",
        name: "Latte",
        description: "A double shot of espresso with 8 oz of streamed milk",
        price: 4.50,
        image: [lat_img],
        category: "Drinks",
        date: 4567890,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Cold Brew",
        description: "12 oz of cold brewed coffee",
        price: 3.50,
        image: [cb_img],
        category: "Drinks",
        date: 4567890,
        bestseller: true
    }
]