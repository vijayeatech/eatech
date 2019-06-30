async function sendData(
  farmerNumber,
  farmerName,
  farmerDistrict,
  farmerBlock,
  farmerGP,
  gameRound,
  insurance,
  school,
  loan,
  wallet,
  preparationCost,
  harvesting,
  Urea,
  yeildProfit,
  netRevanue,
  cf
) {
  console.log(
    farmerNumber,
    farmerName,
    farmerDistrict,
    farmerBlock,
    farmerGP,
    gameRound,
    insurance,
    school,
    loan,
    wallet,
    preparationCost,
    harvesting,
    Urea,
    yeildProfit,
    netRevanue,
    cf
  );

  try {
    let data = {
      farmerNumber,
      farmerName,
      farmerDistrict,
      farmerBlock,
      farmerGP,
      gameRound,
      insurance,
      school,
      loan,
      wallet,
      preparationCost,
      harvesting,
      Urea,
      yeildProfit,
      netRevanue,
      cf
    };
    let rawRes = await fetch(
      "http://appslure.website/irri_dev/insert_game_data.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }
    );
    let dataJson = await rawRes.json();
    console.log(dataJson);
  } catch (e) {
    console.log(e);
  }
}
