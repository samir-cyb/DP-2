document.addEventListener('DOMContentLoaded', () => {
    const activities = [
        // Phase 1: Project Setup
        {
            phase: "1. Project Setup",
            isHeader: true
        },
        {
            task: "Flutter Project Init",
            assignedTo: "Samir",
            priority: "High",
            startDate: "Day 1",
            endDate: "Day 5",
            status: "✅ Completed",
            statusClass: "completed",
            dependencies: "None"
        },
        {
            task: "Supabase Integration",
            assignedTo: "Samir",
            priority: "High",
            startDate: "Day 6",
            endDate: "Day 15",
            status: "✅ Completed",
            statusClass: "completed",
            dependencies: "Flutter Setup Done"
        },
        
        // Phase 2: User Authentication
        {
            phase: "2. User Authentication",
            isHeader: true
        },
        {
            task: "Email/Password Auth",
            assignedTo: "Samia",
            priority: "High",
            startDate: "Day 15",
            endDate: "Day 18",
            status: "✅ Completed",
            statusClass: "completed",
            dependencies: "Supabase Setup Done"
        },
        {
            task: "Phone OTP Auth",
            assignedTo: "Samia",
            priority: "High",
            startDate: "Day 19",
            endDate: "Day 20",
            status: "✅ Completed",
            statusClass: "completed",
            dependencies: "Email Auth Done"
        },
        {
            task: "Profile Management UI",
            assignedTo: "Samia",
            priority: "Medium",
            startDate: "Day 21",
            endDate: "Day 27",
            status: "🟡 In Progress",
            statusClass: "in-progress",
            dependencies: "Auth System Ready"
        },
        
        // Phase 3: Reporting System
        {
            phase: "3. Reporting System",
            isHeader: true
        },
        {
            task: "Report Creation UI",
            assignedTo: "Shezan",
            priority: "High",
            startDate: "Day 27",
            endDate: "Day 30",
            status: "🟡 In Progress",
            statusClass: "in-progress",
            dependencies: "Auth Done"
        },
        {
            task: "Image/Audio Upload",
            assignedTo: "Raiyan",
            priority: "High",
            startDate: "Day 30",
            endDate: "35",
            status: "⬜ Not Started",
            statusClass: "not-started",
            dependencies: "Supabase Storage Ready"
        },
        {
            task: "Timeline Feed",
            assignedTo: "Omur",
            priority: "High",
            startDate: "Day 35",
            endDate: "Day 40",
            status: "🟡 In Progress",
            statusClass: "in-progress",
            dependencies: "Report UI Done"
        },
        {
            task: "Reaction System",
            assignedTo: "Omur",
            priority: "Medium",
            startDate: "Day 40",
            endDate: "Day 43",
            status: "⬜ Not Started",
            statusClass: "not-started",
            dependencies: "Timeline Feed Ready"
        },
        
        // Phase 4: Emergency SOS
        {
            phase: "4. Emergency SOS",
            isHeader: true
        },
        {
            task: "SOS Button (Press & Hold)",
            assignedTo: "Shezan",
            priority: "High",
            startDate: "Day 27",
            endDate: "Day 30",
            status: "🟡 In Progress",
            statusClass: "in-progress",
            dependencies: "Location API Integrated"
        },
        {
            task: "Real-Time Location Tracking",
            assignedTo: "Samia",
            priority: "High",
            startDate: "Day 30",
            endDate: "Day 35",
            status: "⬜ Not Started",
            statusClass: "not-started",
            dependencies: "Supabase GeoQueries Ready"
        },
        {
            task: "FCM Notifications",
            assignedTo: "Raiyan",
            priority: "High",
            startDate: "Day 35",
            endDate: "Day 41",
            status: "⬜ Not Started",
            statusClass: "not-started",
            dependencies: "SOS Logic Done"
        },
        
        // Phase 5: Testing & Deployment
        {
            phase: "5. Testing & Deployment",
            isHeader: true
        },
        {
            task: "Unit Testing",
            assignedTo: "Samir",
            priority: "Medium",
            startDate: "Day 44",
            endDate: "Day 48",
            status: "⬜ Not Started",
            statusClass: "not-started",
            dependencies: "Core Features Done"
        },
        {
            task: "UAT & Bug Fixes",
            assignedTo: "All",
            priority: "High",
            startDate: "Day 48",
            endDate: "Day 52",
            status: "⬜ Not Started",
            statusClass: "not-started",
            dependencies: "Testing Completed"
        },
        {
            task: "Play Store / App Store Deployment",
            assignedTo: "All",
            priority: "High",
            startDate: "Day 52",
            endDate: "Day 54",
            status: "⬜ Not Started",
            statusClass: "not-started",
            dependencies: "UAT Passed"
        }
    ];

    const tbody = document.querySelector('#activityTable tbody');
    
    activities.forEach(item => {
        if (item.isHeader) {
            // Create phase header row
            const row = document.createElement('tr');
            row.className = 'phase-header';
            row.innerHTML = `<td colspan="7">${item.phase}</td>`;
            tbody.appendChild(row);
        } else {
            // Create regular task row
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.task}</td>
                <td>${item.assignedTo}</td>
                <td class="priority-${item.priority.toLowerCase()}">${item.priority}</td>
                <td>${item.startDate}</td>
                <td>${item.endDate}</td>
                <td class="${item.statusClass}">${item.status}</td>
                <td>${item.dependencies}</td>
            `;
            tbody.appendChild(row);
        }
    });
});