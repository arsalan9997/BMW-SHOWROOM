pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/arsalan9997/BMW-SHOWROOM.git'
            }
        }

        stage('Maven Build') {
            steps {
                sh 'mvn clean package -DskipTests'
            }
        }

        stage('Docker Build') {
            steps {
                sh 'docker build --no-cache -t bmw:v1 .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker rm -f bmw-back || true'
            }
        }

        stage('Start New Container') {
            steps {
                withCredentials([
                    string(credentialsId: 'DB_URL', variable: 'DB_URL'),
                    string(credentialsId: 'DB_USER', variable: 'DB_USER'),
                    string(credentialsId: 'DB_PASSWORD', variable: 'DB_PASSWORD')
                ]) {
                    sh '''
                        docker run -d \
                          --name bmw-back \
                          --add-host=host.docker.internal:host-gateway \
                          -p 8081:8081 \
                          -e DB_URL="$DB_URL" \
                          -e DB_USER="$DB_USER" \
                          -e DB_PASSWORD="$DB_PASSWORD" \
                          bmw:v1
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                    echo "Waiting for application to start..."
                    sleep 15

                    echo "Checking application..."
                    curl -f http://localhost:8081 || exit 1

                    echo "BMW Showroom application is UP!"
                '''
            }
        }
    }

    post {
        success {
            echo '======================================'
            echo ' CI/CD PIPELINE SUCCESSFUL'
            echo ' BMW Showroom is deployed!'
            echo '======================================'
        }

        failure {
            echo '======================================'
            echo ' CI/CD PIPELINE FAILED'
            echo ' Check the Jenkins console logs.'
            echo '======================================'
        }
    }
}
