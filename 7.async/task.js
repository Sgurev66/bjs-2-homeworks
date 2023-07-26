class AlarmClock {
    constructor(){      //выделяет память для объекта
        this.alarmCollection = [];
        this.intervalId = null;
    }
    addClock(time, callback){       //добавляет новый звонок в коллекцию существующих
        if (!time || !callback){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if (this.alarmCollection.find(alarm => alarm.time === time)){
            console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push({callback, time, canCall: true});
    }
    removeClock(time){         //удаляет звонки по определённому времени
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }
    getCurrentFormattedTime(){      //возвращает текущее время
        let nowDate = new Date();
        let hour = nowDate.getHours();
        let minute = nowDate.getMinutes();
        hour = (hour < 10) ? '0' + hour : hour;
        minute = (minute < 10) ? '0' + minute : minute;
        return hour + `:` + minute;
    }
    start(){        //запускает будильник
        if (this.intervalId){
            return null;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if(alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000)
    }
    stop(){     //останавливает выполнение интервала будильника
        clearInterval(this.intervalId);
        this.intervalId = null;
    }
    resetAllCalls(){        //сбрасывает возможность запуска всех звонков
        this.alarmCollection.forEach((alarm) => {
            if(alarm.canCall === false){
                alarm.canCall =  true;
            }
        })
    }
    clearAlarms(){      //удаляет все звонки
        this.stop();
        this.alarmCollection = [];
    }
}
