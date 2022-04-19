
function CalcWorkDays(loop, today = null) {
    today = new Date();
    if (today) {
        today = new Date(today)
    }

        var day = 0;
        var month = 0;
        var year = 0;
        var finalDate = 0;
        var forward = 0;
        var checkDay = 1;

        while (forward < loop) {
            var result = new Date(today);
            result.setDate(result.getDate() + checkDay);
            var dayOfWeek = result.getDay();
            let isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0);
            var sumDay = 0;

            if (!isWeekend) {
                day = String(result.getDate()).padStart(2, '0');
                month = String(result.getMonth() + 1).padStart(2, '0');
                year = result.getFullYear();
                finalDate = day + '/' + month + '/' + year;
                forward++;
                checkDay++;
                console.log(finalDate);

            } else {
                sumDay = dayOfWeek == 6 ? 2 : 1;
                checkDay = checkDay + sumDay;
                continue;
            }
        }
}
CalcWorkDays(5);
