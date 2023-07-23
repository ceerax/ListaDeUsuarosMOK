// useSortableData.js
import { useState, useMemo } from "react";

const useSortableData = (data) => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedData = useMemo(() => {
    if (sortField) {
      return [...data].sort((a, b) => {
        const fieldValueA = a[sortField];
        const fieldValueB = b[sortField];
        if (fieldValueA < fieldValueB) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (fieldValueA > fieldValueB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    } else {
      return data;
    }
  }, [data, sortField, sortOrder]);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleResetSort = () => {
    setSortField(null);
    setSortOrder("asc");
  };

  return { sortedData, sortField, sortOrder, handleSort, handleResetSort };
};

export default useSortableData;
