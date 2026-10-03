function ipToInt(ip = '127.0.0.1') {
    return ip
        .split('.')
        .reduce((acc, byte) => (acc << 8) + Number(byte), 0);
}

console.log(ipToInt())