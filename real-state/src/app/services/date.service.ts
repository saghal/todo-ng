export class DateService {
  getCurrentDate(): string {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = year + '-' + month + '-' + day;
    return newdate;
  }
}
