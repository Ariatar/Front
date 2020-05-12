import atob from 'atob'
export default ({ app }, inject) => {
    inject('decodeResponse', data => JSON.parse(atob(data)))
}
