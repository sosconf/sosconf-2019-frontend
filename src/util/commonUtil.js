export default {
    getTicket() {
        let ticket = sessionStorage.getItem('ticket');
        if (ticket) {
            return ticket;
        } else {
            return null;
        }
    }
}