export default function getDate(type) {
    const currentDate = new Date();
  
    switch (type) {
      case 'today':
        return currentDate.toISOString().slice(0, 10);
      case 'yesterday':
        const yesterdayDate = new Date();
        yesterdayDate.setDate(currentDate.getDate() - 1);
        return yesterdayDate.toISOString().slice(0, 10);
      case 'lastWeek':
        const lastWeekDate = new Date();
        lastWeekDate.setDate(currentDate.getDate() - 7);
        return lastWeekDate.toISOString().slice(0, 10);
      case 'lastMonth':
        const lastMonthDate = new Date();
        lastMonthDate.setDate(currentDate.getDate() - 30);
        return lastMonthDate.toISOString().slice(0, 10);
      default:
        return null;
    }
  };