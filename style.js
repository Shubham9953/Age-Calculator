  
    function calculateAge() {
      const day = parseInt(document.getElementById("day").value);
      const month = parseInt(document.getElementById("month").value) - 1; // JS month starts from 0
      const year = parseInt(document.getElementById("year").value);

      if (!day || !month && month!==0 || !year) {
        document.getElementById("result").textContent = "Please enter valid date!";
        return;
      }

      const today = new Date();
      const dob = new Date(year, month, day);

      if (dob > today) {
        document.getElementById("result").textContent = "Date is in the future!";
        return;
      }

      let ageYear = today.getFullYear() - dob.getFullYear();
      let ageMonth = today.getMonth() - dob.getMonth();
      let ageDay = today.getDate() - dob.getDate();

      if (ageDay < 0) {
        ageMonth--;
        let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDay += prevMonth;
      }

      if (ageMonth < 0) {
        ageYear--;
        ageMonth += 12;
      }

      document.getElementById("result").textContent = 
        `You are ${ageYear} Years, ${ageMonth} Months, and ${ageDay} Days old.`;
    }
