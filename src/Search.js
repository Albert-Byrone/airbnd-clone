  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

      <input type="number" min={0} defaultValue={2} />
      <Button>Search Airbnb</Button>
