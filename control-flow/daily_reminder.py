# daily_reminder.py

# Prompt user for task details
task = input("Enter your task: ")
priority = input("Priority (high/medium/low): ").lower()
time_bound = input("Is it time-bound? (yes/no): ").lower()

# Match based on priority level
match priority:
    case 'high':
        if time_bound == 'yes':
            print(f"Reminder: '{task}' is a high priority task that requires immediate attention today!")
        else:
            print(f"Reminder: '{task}' is a high priority task. Consider completing it as soon as possible.")
    
    case 'medium':
        if time_bound == 'yes':
            print(f"Reminder: '{task}' is a medium priority task. It should be completed soon.")
        else:
            print(f"Reminder: '{task}' is a medium priority task. You can schedule it for later.")
    
    case 'low':
        if time_bound == 'yes':
            print(f"Reminder: '{task}' is a low priority task. It can be done when you have free time.")
        else:
            print(f"Note: '{task}' is a low priority task. Consider completing it when you have free time.")
    
    case _:
        print("Error: Invalid priority level.")

# Final encouragement message
print("Well done on completing this project! Let the world hear about this milestone achieved.")
