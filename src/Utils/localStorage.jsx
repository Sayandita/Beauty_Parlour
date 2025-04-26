const employees = [
    {
        "id": 1,
        "firstName": "Arjun",
        "email": "employee1@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "id": 101,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Book client appointments",
                "taskDescription": "Schedule salon services for clients",
                "taskDate": "2024-10-12",
                "category": "Scheduling"
            },
            {
                "id": 102,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Restock hair care products",
                "taskDescription": "Ensure availability of shampoos and conditioners",
                "taskDate": "2024-10-10",
                "category": "Inventory"
            },
            {
                "id": 103,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Assist in bridal makeup",
                "taskDescription": "Help with product selection for bridal clients",
                "taskDate": "2024-10-14",
                "category": "Makeup"
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "id": 104,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Perform skin treatments",
                "taskDescription": "Provide facial therapy for clients",
                "taskDate": "2024-10-11",
                "category": "Skincare"
            },
            {
                "id": 105,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize beauty product orders",
                "taskDescription": "Ensure all cosmetics are stocked",
                "taskDate": "2024-10-09",
                "category": "Inventory"
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Ravi",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "id": 106,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Manage salon hygiene",
                "taskDescription": "Ensure all workstations meet cleanliness standards",
                "taskDate": "2024-10-13",
                "category": "Sanitation"
            },
            {
                "id": 107,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Coordinate hair spa services",
                "taskDescription": "Schedule appointments for hair treatments",
                "taskDate": "2024-10-12",
                "category": "Haircare"
            },
            {
                "id": 108,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Process customer feedback",
                "taskDescription": "Review service feedback to improve operations",
                "taskDate": "2024-10-08",
                "category": "Customer Service"
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        },
        "tasks": [
            {
                "id": 109,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Prepare nail art designs",
                "taskDescription": "Create new nail polish styles for clients",
                "taskDate": "2024-10-13",
                "category": "Nailcare"
            },
            {
                "id": 110,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Supervise waxing treatments",
                "taskDescription": "Ensure proper technique and hygiene in waxing procedures",
                "taskDate": "2024-10-11",
                "category": "Skincare"
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "id": 111,
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false,
                "taskTitle": "Consult for hair treatments",
                "taskDescription": "Guide clients on the best hair care routine",
                "taskDate": "2024-10-14",
                "category": "Haircare"
            },
            {
                "id": 112,
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false,
                "taskTitle": "Finalize spa therapy schedules",
                "taskDescription": "Coordinate sessions for various spa treatments",
                "taskDate": "2024-10-09",
                "category": "Spa"
            },
            {
                "id": 113,
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false,
                "taskTitle": "Train staff on new beauty techniques",
                "taskDescription": "Organize training for latest salon trends",
                "taskDate": "2024-10-12",
                "category": "Training"
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]; 

export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}

