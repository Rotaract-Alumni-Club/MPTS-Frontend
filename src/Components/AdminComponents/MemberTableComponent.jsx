import React, { useEffect, useMemo, useState } from "react";
import "../../SCSS/AdminStyles/AdminCommitees/Manage Committees.scss";

const MemberTableComponent = () => {
  // ✅ baseURL from env (Vite)
  const baseURL = `${import.meta.env.VITE_API_URL}/api`;

  // ✅ adjust this if your route is different
  const USERS_ENDPOINT = `${baseURL}/users/all`; 
  // Example alternatives you might have:
  // const USERS_ENDPOINT = `${baseURL}/baseuser/getAll`;
  // const USERS_ENDPOINT = `${baseURL}/admin/users`; 

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        setErr("");

        const token = localStorage.getItem("token");

        const res = await fetch(USERS_ENDPOINT, {
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        const data = await res.json().catch(() => null);

        if (!res.ok) {
          setErr(data?.message || "Failed to load members");
          setMembers([]);
          return;
        }

        // ✅ your backend might return {data: [...]} or directly [...]
        const list = Array.isArray(data) ? data : data?.data || [];
        setMembers(list);
      } catch (e) {
        setErr("Server error while loading members");
        setMembers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [USERS_ENDPOINT]);

  // Split members into 4 columns (committee groups)
  const columns = useMemo(() => {
    const cols = [[], [], [], []];
    members.forEach((m, idx) => cols[idx % 4].push(m));
    return cols;
  }, [members]);

  // Find max rows among columns (so table rows align)
  const maxRows = useMemo(() => Math.max(...columns.map((c) => c.length), 5), [columns]);

  if (loading) {
    return (
      <div className="commitee">
        <h3>Committee 1</h3>
        <p>Loading members...</p>
      </div>
    );
  }

  if (err) {
    return (
      <div className="commitee">
        <h3>Committee 1</h3>
        <p style={{ color: "red" }}>{err}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="commitee">
        <h3>Committee 1</h3>
        <p>Assign members to committees (loaded from backend)</p>

        <table>
          <thead>
            <tr>
              <th>
                <input type="text" placeholder="ENTER COMMITEE 1" />
              </th>
              <th>
                <input type="text" placeholder="ENTER COMMITEE 2" />
              </th>
              <th>
                <input type="text" placeholder="ENTER COMMITEE 3" />
              </th>
              <th>
                <input type="text" placeholder="ENTER COMMITEE 4" />
              </th>
            </tr>
          </thead>

          <tbody>
            {/* spacer row (optional like your original) */}
            <tr>
              <td><br /></td>
              <td><br /></td>
              <td><br /></td>
              <td><br /></td>
            </tr>

            {/* Member rows */}
            {Array.from({ length: maxRows }).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col, colIndex) => {
                  const member = col[rowIndex];

                  // Decide what to show in input (name / email / index)
                  const value = member ? (member.name || member.email || member.indexNo || "") : "";

                  return (
                    <td key={colIndex}>
                      <input
                        type="text"
                        value={value}
                        readOnly
                        placeholder={`Member ${rowIndex + 1}`}
                        title={member ? `${member.name} (${member.email})` : ""}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <br />
        <br />
      </div>
    </div>
  );
};

export default MemberTableComponent;
