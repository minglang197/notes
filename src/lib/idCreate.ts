export default function createId() {
    let id = parseInt(window.localStorage.getItem('id_Max') || '0') || 0;
    id += 1;
    window.localStorage.setItem('id_Max', id.toString());
    return id;
}