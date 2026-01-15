import React from "react";
import { motion } from "framer-motion";
import { BookHeart } from "lucide-react";

interface BookButtonProps {
    link?: string;
}

const BookButton: React.FC<BookButtonProps> = ({ link = "https://YOUR_BOOK_LINK.com" }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
            className="fixed bottom-8 right-8 z-50 group"
        >
            <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-background/80 backdrop-blur-md border border-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] transition-all duration-300 hover:scale-110">

                {/* Pulse Ring Effect */}
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary/20 animate-ping opacity-75" />

                {/* Icon */}
                <BookHeart className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300 relative z-10" />

                {/* Tooltip */}
                <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-background/90 border border-primary/20 text-primary text-xs font-medium whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    My New Book
                </span>
            </div>
        </motion.a>
    );
};

export default BookButton;