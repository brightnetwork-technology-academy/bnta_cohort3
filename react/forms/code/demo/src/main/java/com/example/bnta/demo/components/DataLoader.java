package com.example.bnta.demo.components;

import com.example.bnta.demo.models.Task;
import com.example.bnta.demo.repositories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    TaskRepository taskRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {

        Task task1 = new Task("Walk dog", "medium", false);
        taskRepository.save(task1);

        Task task2 = new Task("Buy milk", "high", false);
        taskRepository.save(task2);

        Task task3 = new Task("Clean desk", "low", false);
        taskRepository.save(task3);

    }
}
